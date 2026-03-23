import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send email
    const nodemailer = require("nodemailer");
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("✅ Gmail connected successfully");

    // Send to Abhishek
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Portfolio Message!</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ Email sent to Abhishek");

    // Auto reply to sender
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: `✅ Got your message, ${name}!`,
      html: `
        <h2>Thanks for reaching out! 🚀</h2>
        <p>Hi <b>${name}</b>, I received your message and will reply within 24-48 hours.</p>
        <p>— Abhishek Bussa Reddy</p>
      `,
    });

    console.log("✅ Auto-reply sent to sender");

    return NextResponse.json({
      success: true,
      message: "Message sent! Check your inbox for confirmation. 🚀",
    }, { status: 200 });

  } catch (error: unknown) {
    console.error("❌ Error:", error);
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ 
      error: `Failed: ${errMsg}` 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    gmail: process.env.GMAIL_USER || "NOT SET",
    password: process.env.GMAIL_APP_PASSWORD ? "SET ✅" : "NOT SET ❌",
  }, { status: 200 });
}
