"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useWindowSize } from "usehooks-ts";

import DropDown from "./DropDown";
import Burger from "./Burger";

export const NavBar = () => {
  const { width = 0, height = 0 } = useWindowSize();
  const pathname = usePathname();
  const isActive = (href: string) => pathname == href;

  return (
    <div className="flex justify-between m-16">
      <div style={{ flex: 1 }}>
        {/* <Link href='/'>
        <Image src={'/logo.png'} alt="" width={180} height={180}/>
      </Link> */}
      </div>
      {width > 800 ? (
        <div
          style={{
            flex: 2,
            display: "flex",
            gap: "50px",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link href="/info">
            <h5 className={isActive("/info") ? "text-pink" : ""}>Who We Are</h5>
          </Link>
          <Link href="/procedures">
            <DropDown />
          </Link>
          <Link href="/visit">
            <h5 className={isActive("/visit") ? "text-pink" : ""}>
              Your First Visit
            </h5>
          </Link>
          <Link
            className="px-8 py-3 rounded-full bg-pink text-white shadow hover:bg-light-pink"
            href="/contact"
          >
            Make an Appointment
          </Link>
        </div>
      ) : (
        <Burger />
      )}
    </div>
  );
};

export default NavBar;

// .button {
//   padding: 10px 30px 10px 30px;
//   border-radius: 100px;
//   background-color: #db79d4;
//   color: white;
// }

// .button:hover {
//   background-color:
// }
