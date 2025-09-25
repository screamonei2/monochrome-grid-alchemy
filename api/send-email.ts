import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Ensure you have RESEND_API_KEY in your environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = 'claudineiramiro@gmail.com'; // Your email address

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, otherSubject, message } = request.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return response.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({ message: 'Invalid email format' });
    }

    // Construct the final subject line
    const finalSubject = subject === 'Other' && otherSubject
      ? `[Contato Portfolio] ${otherSubject}`
      : `[Contato Portfolio] ${subject}`;

    // Construct the email body
    const emailBody = `
      Nome: ${name}
      Email: ${email}
      Assunto: ${subject === 'Other' && otherSubject ? otherSubject : subject}
      --------------------
      Mensagem:
      ${message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Replace with your verified Resend domain/email if available, otherwise use this default for testing
      to: [recipientEmail],
      subject: finalSubject,
      text: emailBody,
      replyTo: email // Change from 'reply_to' to 'replyTo'
    });

    if (error) {
      console.error('Resend Error:', error);
      return response.status(500).json({ 
        message: 'Failed to send email', 
        error: error.message || 'Unknown error'
      });
    }

    console.log('Email sent successfully:', data);
    return response.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Server Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';
    return response.status(500).json({ 
      message: 'Internal Server Error', 
      error: errorMessage 
    });
  }
}