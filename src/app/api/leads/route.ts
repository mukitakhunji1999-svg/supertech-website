import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

const LeadSchema = z.object({
  type: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(8),
  company: z.string().optional().or(z.literal("")),
  country: z.string().optional().or(z.literal("")),
  city: z.string().optional().or(z.literal("")),
  message: z.string().min(10),
  sourceUrl: z.string().optional().or(z.literal(""))
});

async function appendLead(lead: unknown) {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "leads.ndjson");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(file, `${JSON.stringify(lead)}\n`, "utf8");
}

async function maybeSendEmail(lead: z.infer<typeof LeadSchema>) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEAD_EMAIL_TO || siteConfig.contact.email;

  if (!host || !port || !user || !pass) return { sent: false as const };

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const subject = `[${siteConfig.name}] New ${lead.type.toUpperCase()} inquiry — ${lead.name}`;
  const text = [
    `Type: ${lead.type}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "-"}`,
    `Company: ${lead.company || "-"}`,
    `Country: ${lead.country || "-"}`,
    `City: ${lead.city || "-"}`,
    `Source: ${lead.sourceUrl || "-"}`,
    "",
    "Message:",
    lead.message
  ].join("\n");

  await transporter.sendMail({
    from: `"${siteConfig.name}" <${user}>`,
    to,
    replyTo: lead.email || undefined,
    subject,
    text
  });

  return { sent: true as const };
}

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = LeadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const lead = {
    ...parsed.data,
    receivedAt: new Date().toISOString()
  };

  await appendLead(lead);
  await maybeSendEmail(parsed.data);

  return NextResponse.json({ ok: true });
}

