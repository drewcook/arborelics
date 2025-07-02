import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Create transporter (you'll need to configure this with real SMTP settings)
      const transporter = nodemailer.createTransporter({
        host: "smtp.gmail.com", // or your SMTP provider
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER, // your email
          pass: process.env.EMAIL_PASSWORD, // your email password or app password
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "arborelics@proton.me",
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Message from ARBORELICS Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
