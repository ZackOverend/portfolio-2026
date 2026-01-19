"use client";
import { useLenisAnchor } from "@/app/hooks/useLenisAnchor";
import Image from "next/image";

export default function HeroSection() {
  const scrollTo = useLenisAnchor();

  return (
    <div>
      <div className="relative w-full">
        {/* hero content */}
        <div className="relative mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* left column */}
          <div className="flex flex-col justify-center">
            <h1 className="h1">
              Nice to meet you!
              <br />
              I’m{" "}
              <span className="relative inline-block">
                Zackary Overend.
                <span className="absolute left-0 bottom-0 w-full accent-underline" />
              </span>{" "}
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 font-mono">
              I’m a 4th year computer science student and developer focused on
              building clean, intuitive applications that balance thoughtful
              design with solid engineering. I enjoy turning complex ideas into
              simple, usable experiences across mobile and web.
            </p>

            <div className="mt-8">
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/0 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* right column (image panel) */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative lg:-top-24 w-full max-w-md overflow-hidden border border-white/10 bg-secondary">
              {/* image */}
              <div className="relative aspect-2/3 w-full">
                <Image
                  src="/portrait.png"
                  alt="Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
