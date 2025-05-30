import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
// Your "From" email address - must be a verified domain in Resend
const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"; // Fallback for testing
// Your personal email address where you want to receive contact messages
const toEmail = process.env.CONTACT_TO_EMAIL; // Set this in your .env.local

export async function POST(req: NextRequest) {
  if (!toEmail) {
    console.error("Error: CONTACT_TO_EMAIL environment variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Construct email content
    const subject = `New Contact Form Submission from ${name} - Portfolio`;
    const htmlContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>This message was sent from your portfolio contact form.</small></p>
    `;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`, // Example: "Marco from Portfolio <noreply@yourdomain.com>"
      to: [toEmail],
      subject: subject,
      html: htmlContent,
      reply_to: email, // Set the sender's email as reply_to for easy responding
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        {
          error: "Failed to send message. Please try again later.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!", data },
      { status: 200 }
    );
  } catch (err) {
    console.error("API Route Error:", err);
    // Ensure err is an instance of Error to access message property safely
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    return NextResponse.json(
      { error: "An internal server error occurred.", details: errorMessage },
      { status: 500 }
    );
  }
}
