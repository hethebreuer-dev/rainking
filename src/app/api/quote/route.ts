// Receives quote requests from the site's forms and emails them to the business.
//
// Uses Resend (https://resend.com) through its HTTP API, so no extra package is
// needed. Set these environment variables in Vercel to turn it on:
//   RESEND_API_KEY   – API key from resend.com
//   QUOTE_TO_EMAIL   – where requests are sent (e.g. service@rainkingiowa.com)
//   QUOTE_FROM_EMAIL – a sender on a domain verified in Resend
//                      (defaults to Resend's test sender)
// Until they are set, the form shows an error asking visitors to call.

const FIELDS: [key: string, label: string][] = [
  ["name", "Name"],
  ["phone", "Phone"],
  ["email", "Email"],
  ["address", "Service address"],
  ["city", "City page"],
  ["propertyType", "Property type"],
  ["service", "Service needed"],
  ["timeline", "Timeline"],
  ["budget", "Budget"],
  ["message", "Project details"],
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = Object.fromEntries(FIELDS.map(([key]) => [key, clean(body[key])]));
  if (!data.name || !data.phone || !data.address) {
    return Response.json({ error: "Name, phone and address are required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Quote form: RESEND_API_KEY or QUOTE_TO_EMAIL is not set; request not delivered.");
    return Response.json({ error: "Form delivery is not configured" }, { status: 503 });
  }

  const rows = FIELDS.filter(([key]) => data[key])
    .map(([key, label]) => `<tr><td style="padding:4px 12px 4px 0;color:#555"><b>${label}</b></td><td>${escapeHtml(data[key])}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || "RainKing Website <onboarding@resend.dev>",
      to: [to],
      reply_to: data.email || undefined,
      subject: `New quote request: ${data.service || "General"} — ${data.name}`,
      html: `<h2>New quote request</h2><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Quote form: Resend error", res.status, await res.text());
    return Response.json({ error: "Could not send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
