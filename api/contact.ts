// Contact form endpoint for The Social Goat.
// Replaces the Manus `notifyOwner()` call, which only pinged the Manus account
// owner and does not exist off-platform. Inquiries now email Mike directly.

const TO = process.env.CONTACT_TO ?? "mike@socialgoat.com";
const FROM = process.env.CONTACT_FROM ?? "The Social Goat <hello@socialgoat.com>";

type Inquiry = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max = 5000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

export async function POST(req: Request): Promise<Response> {
  let body: Inquiry;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const message = clean(body.message);
  const company = clean(body.company, 200);
  const phone = clean(body.phone, 50);
  const projectType = clean(body.projectType, 100);
  const budget = clean(body.budget, 100);
  const timeline = clean(body.timeline, 100);

  if (!name || !message) {
    return json({ error: "Please include your name and a message." }, 400);
  }
  if (!isEmail(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fail loudly in the logs, but never tell the visitor their enquiry vanished.
    console.error("RESEND_API_KEY is not set — inquiry could not be delivered", {
      name,
      email,
    });
    return json({ error: "Something went wrong on our end." }, 500);
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company],
    ["Email", email],
    ["Phone", phone],
    ["Project type", projectType],
    ["Budget", budget],
    ["Timeline", timeline],
  ].filter(([, v]) => v) as [string, string][];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px">
      <h2 style="color:#E8621A;margin:0 0 4px">New project inquiry</h2>
      <p style="color:#666;margin:0 0 20px">From the contact form on socialgoat.com</p>
      <table cellpadding="6" style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#666;width:120px;vertical-align:top"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p>
    </div>`;

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Resend rejected the inquiry", res.status, await res.text());
      return json({ error: "Something went wrong on our end." }, 502);
    }
  } catch (err) {
    console.error("Failed to reach Resend", err);
    return json({ error: "Something went wrong on our end." }, 502);
  }

  return json({ success: true }, 200);
}

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
