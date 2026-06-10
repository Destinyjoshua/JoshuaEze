"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // For now we just simulate success. 
    // Later you can replace with a real Server Action or API route (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 650));

    console.log("Contact form submitted:", Object.fromEntries(formData));
    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      form.reset();
      setSubmitted(false);
    }, 4200);
  }

  if (submitted) {
    return (
      <div className="p-8 bg-emerald-950/40 border border-emerald-900/50 rounded-3xl text-center">
        <div className="text-emerald-400 text-3xl mb-3">✓</div>
        <div className="font-medium">Thank you. I’ve received your message.</div>
        <p className="text-xs text-emerald-400/80 mt-1">I’ll reply within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-widest text-[#666] mb-1.5 ml-1">YOUR NAME</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c9a84c] transition-colors rounded-2xl px-5 py-3.5 text-sm placeholder:text-[#666] outline-none" 
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest text-[#666] mb-1.5 ml-1">EMAIL ADDRESS</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c9a84c] transition-colors rounded-2xl px-5 py-3.5 text-sm placeholder:text-[#666] outline-none" 
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest text-[#666] mb-1.5 ml-1">WHAT ARE YOU WORKING ON OR STRUGGLING WITH?</label>
        <textarea 
          name="message" 
          rows={5} 
          required 
          className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c9a84c] transition-colors rounded-3xl px-5 py-4 text-sm placeholder:text-[#666] outline-none resize-y min-h-[120px]" 
        />
      </div>

      <div className="pt-2">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full sm:w-auto px-10 py-4 bg-[#c9a84c] hover:bg-[#b8973e] active:bg-[#a07f2e] transition-all text-[#0a0a0a] font-semibold rounded-3xl flex items-center justify-center gap-x-2 text-sm disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
