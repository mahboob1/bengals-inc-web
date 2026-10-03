"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [platformsOpen, setPlatformsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Bengals Inc.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Technology
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setPlatformsOpen(!platformsOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-gray-950"
            >
              AI Platforms
              <span className="text-xs">⌄</span>
            </button>

            {platformsOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
                <Link
                  href="/platforms/engineering-bench"
                  className="block rounded-lg p-4 transition hover:bg-gray-50"
                  onClick={() => setPlatformsOpen(false)}
                >
                  <div className="font-semibold text-gray-950">
                    Engineering Bench
                  </div>
                  <div className="mt-1 text-sm leading-5 text-gray-500">
                    AI software engineering from repository to verified result.
                  </div>
                </Link>

                <Link
                  href="/platforms"
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  onClick={() => setPlatformsOpen(false)}
                >
                  Explore AI Platforms →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/company"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Company
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-950"
          >
            Contact
          </Link>

          <Link
            href="/demo"
            className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Request a Demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
