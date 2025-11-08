"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-5 py-14">
      <h2 className="text-[15px] text-[#d0d0d0] tracking-[0.12em] uppercase font-medium mb-[22px] text-chart-4">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[26px] items-start">
        <div>
          <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-1">
            Share a few details about your project and timeline. You'll get a focused, professional response with next
            steps, rate options, and an approach tailored to your story.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-1">
            <div>
              <label htmlFor="name" className="text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em]">
                Name / Studio
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name, studio, or production company"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full py-[9px] px-2.5 rounded-[10px] border bg-[rgba(3,5,9,0.96)] text-[#f5f5f5] text-[11px] outline-none transition-all duration-[0.25s] min-h-[38px] focus:shadow-[0_0_10px_rgba(60,127,184,0.35)] focus:bg-[#05070d]"
                style={{ borderColor: "rgba(255,255,255,0.16)" }}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full py-[9px] px-2.5 rounded-[10px] border bg-[rgba(3,5,9,0.96)] text-[#f5f5f5] text-[11px] outline-none transition-all duration-[0.25s] min-h-[38px] focus:shadow-[0_0_10px_rgba(60,127,184,0.35)] focus:bg-[#05070d]"
                style={{ borderColor: "rgba(255,255,255,0.16)" }}
              />
            </div>

            <div>
              <label htmlFor="project-type" className="text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em]">
                Project Type
              </label>
              <input
                id="project-type"
                name="projectType"
                type="text"
                placeholder="Film, trailer, game, series..."
                value={formData.projectType}
                onChange={handleChange}
                className="mt-1 w-full py-[9px] px-2.5 rounded-[10px] border bg-[rgba(3,5,9,0.96)] text-[#f5f5f5] text-[11px] outline-none transition-all duration-[0.25s] min-h-[38px] focus:shadow-[0_0_10px_rgba(60,127,184,0.35)] focus:bg-[#05070d]"
                style={{ borderColor: "rgba(255,255,255,0.16)" }}
              />
            </div>

            <div>
              <label htmlFor="message" className="text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em]">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about the tone, scope, timeline, and any links (scripts, edits, references)."
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full py-[9px] px-2.5 rounded-[10px] border bg-[rgba(3,5,9,0.96)] text-[#f5f5f5] text-[11px] outline-none transition-all duration-[0.25s] resize-y focus:shadow-[0_0_10px_rgba(60,127,184,0.35)] focus:bg-[#05070d]"
                style={{ borderColor: "rgba(255,255,255,0.16)" }}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 py-2.5 px-[18px] rounded-full text-[11px] tracking-[0.16em] uppercase font-semibold transition-all duration-[0.25s] bg-gradient-to-r from-[#4da45b] to-[#3c7fb8] text-[#010101] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.45)] w-fit shadow-sm"
            >
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-2 mt-2.5 text-[11px] text-[#b2b2b2]">
          <a
            href="mailto:tymar.miles@ariladia.com"
            className="py-1 px-2.5 rounded-full text-[9px] border inline-flex gap-1.5 items-center text-[#d0d0d0] w-fit transition-all duration-[0.25s] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-0.5"
            style={{ borderColor: "rgba(255,255,255,0.16)" }}
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium text-chart-4">tymar.miles@ariladia.com</span>
          </a>
          <div>
            For collaborations, scoring, or trailer cues, please include deadlines, formats, and any reference music so
            we can respond with an accurate proposal.
          </div>
          <div>
            Social / Portfolio links can be added here (YouTube, Instagram, etc.) to guide clients to your latest work.
          </div>
        </div>
      </div>
    </section>
  )
}
