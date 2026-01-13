"use client";

import Link from "next/link";

export default function ContactSection() {
  const email = "zackaryoverend@gmail.com"; // change if needed

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* left */}
            <div className="max-w-xl">
              <p className="text-xs tracking-widest text-white/50">CONTACT</p>

              <h2 className="mt-3 text-4xl font-light tracking-tight text-white/90 sm:text-5xl">
                Let’s build something clean and useful.
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/65">
                If you’d like to chat about an internship, a project, or
                collaboration, reach out anytime. I typically respond within a
                day.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}?subject=Hello Zackary`}
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm text-black transition hover:opacity-90"
                >
                  Email me
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/0 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
                >
                  Copy email
                </button>
              </div>

              <div className="mt-4 text-sm text-white/60">
                <span className="text-white/40">Email:</span>{" "}
                <span className="font-mono">{email}</span>
              </div>
            </div>

            {/* right */}
            <div className="w-full md:w-[320px]">
              <div className="text-xs tracking-widest text-white/50">LINKS</div>

              <div className="mt-4 grid gap-3">
                <Link
                  href="https://github.com/"
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  target="_blank"
                >
                  GitHub →
                </Link>

                <Link
                  href="https://www.linkedin.com/"
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  target="_blank"
                >
                  LinkedIn →
                </Link>

                <Link
                  href="/ZackaryOverend_Resume.pdf"
                  className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
                  target="_blank"
                >
                  Resume →
                </Link>
              </div>

              <p className="mt-4 text-xs leading-5 text-white/45">
                Prefer a quick call? Send a message and I’ll share availability.
              </p>
            </div>
          </div>
        </div>

        {/* tiny footer line */}
        <div className="mt-8 flex items-center justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} Zackary Overend</span>
          <a href="#top" className="hover:text-white/70 transition">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
