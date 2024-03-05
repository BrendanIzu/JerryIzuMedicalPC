import Link from "next/link";
import Image from 'next/image'

import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";
import Offerings from "./assets/components/Offerings";
import Appt from "./assets/components/Appt";
import Section from "./assets/components/Section";

export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="mx-12">
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-152">
            <h1>
              Specializing in Obstetrics & Gynecology for over 25 years.
            </h1>
            <br/>
            <h2>
              Providing the best medical care for every aspect of a woman’s 
              health — every step of the way.
            </h2>
          </div>
          <div className="w-152">
            <Image src='/homepage-hero.png' alt="" width={1000} height={1000}></Image>
          </div>
        </div>
        
        <Offerings/>
      
        <div className="flex justify-center mt-12">
          <Link className="hover:text-pink" href='/procedures'>View All Services</Link>
        </div>
      </div>
      
      <br/>
      <br/>
      <br/>
        
      <Section 
        title={"You’re in good hands."} 
        subtitle={"Whether you’re new to womanhood or beyond menopause, \
        we’re here with you and always strive to create a comfortable, \
        caring environment. \n\n\
        Valencia Gynecology Associates have been serving Santa Clarita residents \
        for over 20 years, offering a wide variety of obstetrical and gynecological \
        services. In addition to routine prenatal care, well-women exams and \
        gynecological surgery, we also address the medical issues \
        concerning teens and menopausal women. \n\n\
        Our health care providers and staff are committed to treat each \
        patient with dignity, respect, kindness and courtesy. \
        In meeting our patient’s needs we believe that every woman \
        is special in her own way. \n\n\
        Whether it’s for a routine exam or a extensive surgery, \
        we hope to be attending to your health soon in the best way possible. \
        If you have any questions, please do not hesitate to reach out."} 
        image={"/homepage-hero2.png"} 
        position={"section"}/>
      
      <Appt/>
      <Footer/>
    </>
  );
}
