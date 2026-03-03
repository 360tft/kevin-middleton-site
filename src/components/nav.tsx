"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(10,10,10,0.92)] backdrop-blur-md text-white"
        aria-label="Toggle navigation"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden absolute bottom-16 left-1/2 -translate-x-1/2 bg-[rgba(10,10,10,0.92)] backdrop-blur-md rounded-2xl px-4 py-3 flex flex-col gap-2 min-w-[160px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                pathname === link.href
                  ? "text-white bg-white/15"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-1 bg-[rgba(10,10,10,0.92)] backdrop-blur-md rounded-full px-2 py-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm px-5 py-2 rounded-full transition-colors ${
              pathname === link.href
                ? "text-white bg-white/15"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
