import Link from "next/link";
import Image from 'next/image'

import NavBar from "../assets/components/NavBar";
import Bar from "../assets/components/Bar";

import { staffInfo } from "../assets/staffInfo";
import Staff from "../assets/components/Staff";
import { Person } from "../interfaces/Person";
import Footer from "../assets/components/Footer";

export default function Info() {
  // const staffList = staffInfo.map(person => <div>{person.title}</div>);
  
  return (
    <>
      <NavBar/>
      {/* MAIN */}
      <div style={{margin: '50px', marginTop: '30px'}}>
        {/* HEADER */}
        <div style={{padding: '40px', backgroundColor: ''}}>
          <Bar/>
          <br/>
          <br/>
          <div style={{color: 'black', fontSize: '40px'}}>
            Our Providers
          </div>
          <br/>
          <div style={{fontSize: '20px'}}>
            Our mission statement is to provide the best care at the right time 
            for the right patients because we care about your experience.</div>
          <br/>
          <div style={{fontSize: '20px'}}>
            We offer general obstetrics, high risk obstetrics as well as 
            gynecology and specialty care(infertility, hormonal therapy such as 
            bioidenticals and hormone pellet treatments for menopause), 
            hereditary cancer evaluation. We believe in partnering with our 
            patients to make a true difference in their health.</div>
        </div>
        
        {/* STAFF */}
        <div>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',}}>
            {staffInfo.map((person: Person) => <div key={person.toString()}><Staff person={person}/></div>)}
          </div>
          <div style={{marginTop: '50px', paddingLeft: '40px'}}>
            <div>Our Dedicated Staff  ❤️</div>
            <div style={{display: 'flex', gap: '20px', marginTop: '20px'}}>
              <div>Margie</div>
              <div>Yolanda</div>
              <div>Michelle</div>
              <div>Martha</div>
              <div>Yvonne</div>
              <div>Natalie</div>
              <div>Yesenia</div>
              <div>Emma</div>
              <div>Kassi</div>
            </div>
          </div>
        </div>
        
        {/* AFFILIATIONS */}
        <div style={{marginTop: '110px', paddingLeft: '40px'}}>
          <Bar/>
          <div style={{marginTop: '45px', fontSize: '30px', color: 'black'}}>Hospital Affiliations</div>
          <div style={{marginTop: '45px', display: 'flex', justifyContent: 'space-around'}}>
            <div style={{ flex: 1}}>
              <Image style={{borderRadius: '5px'}} src='/mayo.jpeg' height={500} width={500} alt=""/>
              <br/>
              <h2>Henry Mayo Newhall Hospital</h2>
              <p>McBean Pkwy, Valencia CA</p>
            </div>
            <div style={{flex: 1}}>
              <Image style={{borderRadius: '5px'}} src='/holycross.jpeg' height={500} width={500} alt=""/>
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
