"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import styles from "../styles/DropDown.module.css";

export default function Burger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname == href;

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Dropdown>
        <DropdownTrigger>
          <Button>Menu</Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          style={{
            width: "300px",
            backgroundColor: "#faf8fb",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <DropdownSection>
            <DropdownItem
              style={
                isActive("/info")
                  ? { padding: "10px 20px 10px 20px", color: "#db79d4" }
                  : { padding: "10px 20px 10px 20px" }
              }
            >
              <Link href="/info">Who We Are</Link>
            </DropdownItem>
            <DropdownItem
              style={
                isActive("/procedures")
                  ? { padding: "10px 20px 10px 20px", color: "#db79d4" }
                  : { padding: "10px 20px 10px 20px" }
              }
            >
              <Link href="/procedures">Services We Provide</Link>
            </DropdownItem>
            <DropdownItem
              style={
                isActive("/visit")
                  ? { padding: "10px 20px 10px 20px", color: "#db79d4" }
                  : { padding: "10px 20px 10px 20px" }
              }
            >
              <Link href="/visit">Your First Visit</Link>
            </DropdownItem>
            <DropdownItem
              style={
                isActive("/contact")
                  ? { padding: "10px 20px 10px 20px", color: "#db79d4" }
                  : { padding: "10px 20px 10px 20px" }
              }
            >
              <Link href="https://l.klara.com/AW9DWTCmJzfHFXCK">
                Book an Appointment
              </Link>
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
