"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/info", label: "Who We Are" },
  { href: "/procedures", label: "Services We Provide" },
  { href: "/visit", label: "Your First Visit" },
];

export default function Burger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-purple text-dark-purple"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {isOpen
            ? <path d="M6 6l12 12M18 6L6 18"/>
            : <path d="M4 7h16M4 12h16M4 17h16"/>}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-24 z-20 mx-6 flex flex-col gap-1 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`rounded-md px-4 py-3 font-medium hover:bg-purple ${pathname == href ? "text-pink" : "text-dark-purple"}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://l.klara.com/AW9DWTCmJzfHFXCK"
            className="mt-2 rounded-full bg-pink px-4 py-3 text-center font-medium text-white"
          >
            Make an Appointment
          </Link>
          <Link
            href="https://izu.ema.md/ema/pay/online"
            className="rounded-full border border-pink px-4 py-3 text-center font-medium text-pink"
          >
            Pay Online
          </Link>
        </div>
      )}
    </>
  );
}
