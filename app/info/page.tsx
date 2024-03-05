import Image from 'next/image'

import NavBar from "../assets/components/NavBar";
import Bar from "../assets/components/Bar";
import Staff from "../assets/components/Staff";
import Footer from "../assets/components/Footer";

import { Person } from "../interfaces/Person";

import { staffInfo } from "../assets/staffInfo";

export default function Info() {
  return (
    <>
      <NavBar/>
      <div className="m-16">
        <div>
          <Bar/>
          <br/>
          <h1>
            Our Providers
          </h1>
          <br/>
          <h2>
            Our mission statement is to provide the best care at the right time 
            for the right patients because we care about your experience.
          </h2>
          <br/>
          <h2>
            We offer general obstetrics, high risk obstetrics as well as 
            gynecology and specialty care(infertility, hormonal therapy such as 
            bioidenticals and hormone pellet treatments for menopause), 
            hereditary cancer evaluation. We believe in partnering with our 
            patients to make a true difference in their health.
          </h2>
        </div>
        
        <div className="mt-24">
          <div className="flex justify-center flex-wrap">
            {staffInfo.map((person: Person) => <div key={person.toString()}><Staff person={person}/></div>)}
          </div>
          <div className="mt-12">
            <h2>Our Dedicated Staff  ❤️</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <h3>Margie</h3>
              <h3>Yolanda</h3>
              <h3>Michelle</h3>
              <h3>Martha</h3>
              <h3>Yvonne</h3>
              <h3>Natalie</h3>
              <h3>Yesenia</h3>
              <h3>Emma</h3>
              <h3>Kassi</h3>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <Bar/>
          <br/>
          <h1>Hospital Affiliations</h1>
          <div className="my-12 flex justify-start gap-12">
            <div>
              <Image className="rounded-lg" src='/mayo.jpeg' height={500} width={500} alt=""/>
              <br/>
              <h2>Henry Mayo Newhall Hospital</h2>
              <p>McBean Pkwy, Valencia CA</p>
            </div>
            <div>
              <Image className="rounded-lg" src='/holycross.jpeg' height={500} width={500} alt=""/>
              <br/>
              <h2>Holy Cross Hospital</h2>
              <p>Mission Hills</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
