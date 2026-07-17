const json = (response, status, body) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
};

const clean = (value) => String(value || "").trim();

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return json(response, 405, { error: "method_not_allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = clean(process.env.CONTACT_TO);
  const from = clean(process.env.CONTACT_FROM) || "Holen <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact config missing", {
      hasApiKey: Boolean(apiKey),
      hasContactTo: Boolean(to),
      hasContactFrom: Boolean(process.env.CONTACT_FROM),
    });
    return json(response, 500, { error: "contact_not_configured" });
  }

  const body = parseBody(request.body);
  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message);

  if (!message) {
    return json(response, 400, { error: "message_required" });
  }

  if (email && !isEmail(email)) {
    return json(response, 400, { error: "invalid_email" });
  }

  const recipients = to.split(",").map((item) => item.trim()).filter(Boolean);

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h2>Mensaje desde el sitio oficial de Holen</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name || "Sin indicar")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || "Sin indicar")}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const payload = {
    from,
    to: recipients,
    subject: "Mensaje desde el sitio oficial de Holen",
    html,
  };

  if (email) {
    payload.reply_to = email;
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const detail = await safeJson(resendResponse);

    if (!resendResponse.ok) {
      console.error("Resend rejected contact email", {
        status: resendResponse.status,
        error: detail?.message || detail?.error || detail,
        from,
        recipientsCount: recipients.length,
      });

      return json(response, 502, {
        error: "email_provider_rejected",
        providerStatus: resendResponse.status,
        providerMessage: detail?.message || detail?.error || "Resend rejected the email",
      });
    }

    return json(response, 200, { ok: true });
  } catch (error) {
    console.error("Contact email request failed", error);
    return json(response, 500, { error: "contact_request_failed" });
  }
}

async function safeJson(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
