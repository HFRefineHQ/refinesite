import type { Request, Response } from "express";

export default async function contact(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { company, name, email, phone, employees } = req.body;

  if (!company || !name || !email || !employees) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // For now: log the lead (later email or DB)
  console.log("New audit request:", {
    company,
    name,
    email,
    phone,
    employees,
  });

  return res.status(200).json({ success: true });
}
