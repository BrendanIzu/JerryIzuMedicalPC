'use client'

import Link from "next/link";
import Image from 'next/image'

import { useWindowSize } from "usehooks-ts";

import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";
import Offerings from "./assets/components/Offerings";
import Bar from "./assets/components/Bar";

import bg from '../public/background.jpg';
import hero from '../public/homepage-hero.png';
import hero2 from '../public/homepage-hero2.png';

import styles from './assets/styles/NavBar.module.css';

export default function Home() {
  const { width = 0, height = 0 } = useWindowSize();
  
  return (
    <div style={false ? {backgroundImage: `url(${bg.src})`, backgroundSize: '100%'} : {}}>
      <NavBar/>
      
      {/* HEADER */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{flex: 1}}>
          <div style={{display: 'flex', flexDirection: 'column', padding: '60px'}}>
            <div style={{color: 'black', fontSize: '35px', fontWeight: 'bolder'}}>
              Specializing in Obstetrics & Gynecology for over 25 years.
            </div>
            <br/>
            <div style={{fontSize: '25px'}}>
              Providing the best medical care for every aspect of a woman’s 
              health — every step of the way.
            </div>
          </div>
        </div>
        {width > 1000 && <div style={{flex: 1}}>
          <Image src={hero} alt="" width={1000} height={1000}></Image>
        </div>}
      </div>
      <Offerings/>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
        <Link className={styles.link} href='/procedures'>View All Services</Link>
      </div>
      
      {/* GOOD HANDS */}
      <div style={{marginTop: '80px', display: 'flex', justifyContent: 'space-around'}}>
      {width > 1000 && <div style={{flex: 1}}>
        <Image src={hero2} alt="" width={600} height={600}></Image>
        </div>}
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '40px'}}>
          <Bar/>
          <h1 style={{color: 'black', marginTop: '30px'}}>You’re in good hands.</h1>
          <p>
            Whether you’re new to womanhood or beyond menopause, 
            we’re here with you and always strive to create a comfortable, 
            caring environment.<br/><br/>

            Valencia Gynecology Associates have been serving Santa Clarita residents 
            for over 20 years, offering a wide variety of obstetrical and gynecological 
            services. In addition to routine prenatal care, well-women exams and 
            gynecological surgery, we also address the medical issues 
            concerning teens and menopausal women.<br/><br/>

            Our health care providers and staff are committed to treat each 
            patient with dignity, respect, kindness and courtesy. 
            In meeting our patient’s needs we believe that every woman 
            is special in her own way.<br/><br/>

            Whether it’s for a routine exam or a extensive surgery, 
            we hope to be attending to your health soon in the best way possible. 
            If you have any questions, please do not hesitate to reach out.
          </p>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px', marginBottom: '100px'}}>
        <Link className={styles.button} href='/'>Make an Appointment</Link>
        <div style={{paddingLeft: '20px'}}>
          <Link className={styles.link} href='/info'>Meet Our Providers</Link>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
