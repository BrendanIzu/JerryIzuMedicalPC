'use client';

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";

import styles from '../styles/DropDown.module.css';

export default function DropDown() {
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
      <Dropdown isOpen={isOpen}>
        <DropdownTrigger>
          <Button onClick={() => setIsOpen(!isOpen)}>
            Services We Provide
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant='faded' style={{  width: '300px', 
                                backgroundColor: '#faf8fb',
                                borderRadius: '10px',
                                padding: '10px'}}>
          <DropdownSection>
            <DropdownItem style={isActive('/procedures/gynecology') ? 
            {padding: '10px 20px 10px 20px', color: '#db79d4'} : 
            {padding: '10px 20px 10px 20px'}}>
              <Link href='/procedures/gynecology'>Gynecology</Link>
            </DropdownItem>
            <DropdownItem style={isActive('/procedures/prenatal') ? 
            {padding: '10px 20px 10px 20px', color: '#db79d4'} : 
            {padding: '10px 20px 10px 20px'}}>
              <Link href='/procedures/prenatal'>Prenatal Care & Obstetrics</Link>
            </DropdownItem>
            <DropdownItem style={isActive('/procedures/postnatal') ? 
            {padding: '10px 20px 10px 20px', color: '#db79d4'} : 
            {padding: '10px 20px 10px 20px'}}>
              <Link href='/procedures/postnatal'>Postnatal Care</Link>
            </DropdownItem>
            <DropdownItem style={isActive('/procedures/menopause') ? 
            {padding: '10px 20px 10px 20px', color: '#db79d4'} : 
            {padding: '10px 20px 10px 20px'}}>
              <Link href='/procedures/menopause'>Menopause & Beyond</Link>
            </DropdownItem>
          </DropdownSection>
         
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
