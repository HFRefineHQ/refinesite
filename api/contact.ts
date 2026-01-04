import type { VercelRequest, VercelResponse } from "@vercel/node";

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

  console.log("New audit request:", {
    company,
    name,
    email,
    phone,
    employees,
  });

  return res.status(200).json({ success: true });
}
