import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { company, name, email, phone, employees } = req.body;

  if (!company || !name || !email || !employees) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!process.env.ALERT_EMAIL) {
    console.error("ALERT_EMAIL is missing");
    return res.status(500).json({ error: "Email recipient not configured" });
  }

  try {
    const result = await resend.emails.send({
      from: "Refine Alerts <onboarding@resend.dev>",
      to: process.env.ALERT_EMAIL,
      subject: "New Refine Audit Request",
      html: `
        <h2>New Audit Request</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company Size:</strong> ${employees}</p>
        <hr />
        <p>Submitted at ${new Date().toLocaleString()}</p>
      `,
    });

    // 🔍 This confirms Resend accepted the email
    console.log("RESEND RESULT:", result);

    console.log("New audit request:", {
      company,
      name,
      email,
      phone,
      employees,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("RESEND ERROR FULL:", error);
    return res.status(500).json({ error: "Failed to send email alert" });
  }
}
