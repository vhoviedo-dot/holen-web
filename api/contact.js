const json = (response, status, body) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return json(response, 405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "Holen <contacto@holen.com.ar>";

  if (!apiKey || !to) {
    return json(response, 500, { error: "Contact service is not configured" });
  }

  const { name = "", email = "", message = "" } = request.body || {};

  if (!message.trim()) {
    return json(response, 400, { error: "Message is required" });
  }

  const html = `
    <h2>Mensaje desde el sitio oficial de Holen</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name || "Sin indicar")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "Sin indicar")}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((item) => item.trim()).filter(Boolean),
      reply_to: email || undefined,
      subject: "Mensaje desde el sitio oficial de Holen",
      html,
    }),
  });

  if (!resendResponse.ok) {
    return json(response, 500, { error: "Email provider rejected the message" });
  }

  return json(response, 200, { ok: true });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
