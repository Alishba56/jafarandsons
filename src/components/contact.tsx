"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@luxe.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Address", value: "123 Luxury St, NY 10001" },
  ];

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 glow-text">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">We&apos;d love to hear from you. Send us a message!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="bg-card/40 backdrop-blur-md border border-border/20 rounded-xl p-6 text-center"
          >
            <item.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-semibold mb-2">{item.label}</h3>
            <p className="text-muted-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-card/40 backdrop-blur-md border border-border/20 rounded-xl p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Phone number"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className={`w-full px-8 py-3 bg-black text-white rounded-lg font-semibold transition-all ${
            isSubmitted ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:bg-accent"
          }`}
        >
          {isSubmitted ? "✓ Message Sent!" : "Send Message"}
        </button>
      </form>
    </section>
  );
}
