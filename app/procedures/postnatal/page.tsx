'use client';

import Link from "next/link";
import Image from "next/image";
import NavBar from "../../assets/components/NavBar";
import { useWindowSize } from "usehooks-ts";
import Bar from "@/app/assets/components/Bar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";

const services = [
  "Safe pre-pregnancy assessment and counseling",
  "Recurrent miscarriage evaluation and counseling",
  "Early pregnancy genetic counseling",
  "Low-risk pregnancy care",
  "Pregnancy care for women over 35 years old",
  "High-risk pregnancy care",
  "Pregnancy complication management",
  "Pre-existing medical conditions management during pregnancy",
  "Operative obstetrics and cesarean section"
];

export default function Info() {
  const { width = 0, height = 0 } = useWindowSize();
  
  return (
    <>
      <NavBar/>
      
      {/* HEADER */}
      <div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{flex: 1, marginRight: '100px', marginLeft: '100px'}}>
            <Link style={{color: '#db79d4'}} href='/procedures'>View All Services</Link>
            <br/>
            <br/>
            <h1 style={{color: 'black'}}>Postnatal Care</h1>
            <br/>
            <h2>
              We will work to make sure your own personal<br/> 
              recovery goes smoothly, while your baby remains<br/> 
              healthy and without complications.
            </h2>
          </div>
          {width > 1000 && <div style={{flex: 1, marginRight: '100px'}}>
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src='/mother.jpeg' height={500} width={500} alt=""/>
          </div>}
        </div>
      </div>
      
      {/* HEADER 2 */}
      <div>
        <div style={{marginTop: '100px', display: 'flex', alignItems: 'center'}}>
          {width > 1000 && <div style={{flex: 1, marginLeft: '100px'}}>
            <Image style={{borderRadius: '10px 50px 10px 50px'}} src='/hands.png' height={500} width={500} alt=""/>
          </div>}
          <div style={{flex: 1, marginRight: '100px', marginLeft: '100px'}}>
            <Bar/>
            <br/>
            <br/>
            <h1 style={{color: 'black'}}>Understanding the changes that come after childbirth.</h1>
            <br/>
            <p>
              After going through childbirth, it is essential that you recover 
              both mentally and physically. As you are entering a chapter for your 
              family and motherhood, there is often a period of adjustment needed.<br/><br/>

              We have seen thousands of women go through this process and we hope to
               be there for you during this time as well to answer any questions you 
               may have. Beyond learning to care for your baby though, it is vital to 
               care for yourself in this period.<br/><br/>

              Rest, recovery and proper nutrition can all be beneficial to your 
              well-being, and there is no time more important to prioritize it than now. 
              With us, we’ll be there to help guide you along the way.
            </p>
          </div>
        </div>
      </div>  
      
      <br/>
      <br/>
      
      <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end', flexWrap: 'wrap'}}>
        
        <div className="info">
          <br/>
          <h4>Tips For Healthy Recovery</h4>
          <br/>
          <ul>
            <li>Get plenty of rest</li>
            <li>Stay hydrated</li>
            <li>Eat well and a balanced diet</li>
            <li>Socialize with others</li>
            <li>Take showers and keep clean</li>
            <li>Ask for help (meals, errands, etc)</li>
            <li>Take light walks</li>
            <li>Understand mood swings and depression can happen.</li>
            <li>Don’t hesitate to reach out for help.</li>
          </ul>
        </div>
        
        <div className="info" style={{width: '600px'}}>
          <br/>
          <h2>Stages of Pregnancy</h2>
          <br/>
          <div style={{display: 'flex'}}>
            <div style={{width: '230px', backgroundColor: '#f5a9de', padding: '10px', paddingLeft: '15px', paddingRight: '20px'}}>
              <h4 style={{color: 'white'}}>Childbirth</h4>
              <p style={{fontSize: '13px', color: 'white'}}>Delivery</p>
            </div>
            <div style={{width: '230px', backgroundColor: '#e897e1', padding: '10px', paddingLeft: '15px', paddingRight: '20px'}}>
            <h4 style={{color: 'white'}}>Postnatal Period</h4>
              <p style={{fontSize: '13px', color: 'white'}}>6 to 8 weeks later</p>
            </div>
            {width > 1300 && <div className="arrow-right"></div>}
          </div>
        </div>
        
      </div>
      
      
      <Services title='Our Prenatal & Childbirth Services' services={services}/>
      
      <Footer/>
    </>
  );
}
