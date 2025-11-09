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

  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType || "New Project"}`)
    const body = encodeURIComponent(
      `Name/Studio: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Project Type: ${formData.projectType}\n\n` +
        `Project Details:\n${formData.message}`,
    )

    const mailtoLink = `mailto:tymar.miles@ariladia.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Show confirmation
    setShowConfirmation(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    })

    // Hide confirmation after 5 seconds
    setTimeout(() => {
      setShowConfirmation(false)
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="max-w-[1200px] mx-auto px-5 py-14">
      <h2 className="text-[15px] text-[#d0d0d0] tracking-[0.12em] uppercase font-medium mb-[22px] text-chart-4">
        Contact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[26px] items-start">
        <div>
          <p className="text-[13px] text-[#b2b2b2] leading-relaxed mb-1">
            Share a few details about your project and timeline. You'll get a focused, professional response with next
            steps, rate options, and an approach tailored to your story.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-1">
            {showConfirmation && (
              <div className="py-3 px-4 rounded-[10px] bg-gradient-to-r from-[#4da45b]/20 to-[#3c7fb8]/20 border border-[#4da45b]/40 text-[11px] text-[#4da45b] animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Your email client has been opened. Thank you for reaching out!</span>
                </div>
              </div>
            )}

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
          <div className="mt-2 flex flex-col gap-2">
            <p className="text-[10px] text-[#d0d0d0] uppercase tracking-[0.14em]">Connect & Follow</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/ariladia_entertainment?igsh=MnRvY2hndmFlc2tj"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-full text-[9px] border inline-flex gap-1.5 items-center text-[#d0d0d0] transition-all duration-[0.25s] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.16)" }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.204.013 3.583.07 4.849.149 3.227 1.664 4.771 4.919 4.919 1.266-.057 1.645-.069 4.948-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://share.google/pGgql7K8ceGmzCscm"
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-full text-[9px] border inline-flex gap-1.5 items-center text-[#d0d0d0] transition-all duration-[0.25s] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:scale-105"
                style={{ borderColor: "rgba(255,255,255,0.16)" }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4V17c0 4.52-3.15 8.75-8 9.92-4.85-1.17-8-5.4-8-9.92V8.18l8-4zM11 17h2v2h-2v-2zm0-10h2v8h-2V7z" />
                </svg>
                <span>Leave a Review</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
