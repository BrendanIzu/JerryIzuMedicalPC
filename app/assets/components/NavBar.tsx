'use client'

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { useWindowSize } from 'usehooks-ts';

import logo from '../../../public/logo.png';
import styles from '../styles/NavBar.module.css';
import DropDown from './DropDown';
import Burger from './Burger';

export const NavBar = () => {
  const { width = 0, height = 0 } = useWindowSize()
  const pathname = usePathname();
  
  const isActive = (href: string) => pathname == href;
  
  return (
    <div style={{background: 'transparent', display: 'flex', justifyContent: 'space-between', margin: '50px'}}>
      <div style={{flex: 1}}>
      <Link href='/'>
        <Image src={logo} alt="" width={160} height={160}/>
      </Link>
      </div>
      {width > 800 ? 
      
      <div style={{flex: 2, display: 'flex', gap: '50px', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Link className={isActive('/info') ? styles.active : styles.link} href='/info'>Who We Are</Link>
        <Link className={isActive('/procedures') ? styles.active : styles.link} href='/procedures'>
          <DropDown/>
        </Link>
        <Link className={isActive('/visit') ? styles.active : styles.link} href='/visit'>Your First Visit</Link>
        <Link className={styles.button} href='/contact'>Make an Appointment</Link>
      </div>
      
      :
      
      <Burger/>
      
      }
    </div>
  );
}

export default NavBar;