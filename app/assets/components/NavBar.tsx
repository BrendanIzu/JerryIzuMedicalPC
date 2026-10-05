"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import DropDown from "./DropDown";
import Burger from "./Burger";

export const NavBar = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname == href;

  return (
    <header className="page-x relative flex items-center justify-between py-6 md:py-8">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/mark.png" alt="" width={33} height={40} />
        <span className="leading-tight">
          <span className="block font-semibold text-[#1f1a21]">Jerry K. Izu, M.D.</span>
          <span className="block text-sm text-dark-purple">Obstetrics & Gynecology</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-7">
        <Link href="/info">
          <h5 className={isActive("/info") ? "text-pink" : ""}>Who We Are</h5>
        </Link>
        <DropDown active={pathname.startsWith("/procedures")} />
        <Link href="/visit">
          <h5 className={isActive("/visit") ? "text-pink" : ""}>
            Your First Visit
          </h5>
        </Link>
        <div className="flex gap-3">
          <Link
            className="px-6 py-2.5 rounded-full bg-pink text-white font-medium shadow-sm hover:bg-light-pink"
            href="https://l.klara.com/AW9DWTCmJzfHFXCK"
          >
            Make an Appointment
          </Link>
          <Link
            className="px-6 py-2.5 rounded-full border border-pink text-pink font-medium hover:bg-pink hover:text-white"
            href="https://izu.ema.md/ema/pay/online"
          >
            Pay Online
          </Link>
        </div>
      </nav>

      <div className="lg:hidden">
        <Burger />
      </div>
    </header>
  );
};

export default NavBar;
