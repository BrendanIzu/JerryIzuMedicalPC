'use client';

import Link from "next/link";
import Image from "next/image";
import NavBar from "../assets/components/NavBar";
import Bar from "../assets/components/Bar";
import Footer from "../assets/components/Footer";
import { useWindowSize } from "usehooks-ts";
import Faqs from "../assets/components/Faqs";
import { Faq } from "../interfaces/Faq";

const questionsAndAnswers: Faq[] = [
  {
    question: "Are my medical records kept confidential?",
    answer: "Yes, your medical records are handled with the utmost privacy. Our staff is bound by strict confidentiality regulations as a condition of employment and adheres to HIPAA guidelines. No information will be released without your consent."
  },
  {
    question: "What insurance does the practice accept?",
    answer: "We accept PPO and Medicare with secondary insurances. Unfortunately, HMOs are not accepted. Please contact our office if you have any questions about your specific insurance coverage."
  },
  {
    question: "What are the accepted payment methods?",
    answer: "We accept bank checks, personal checks, cash, and major credit cards (MasterCard, VISA, AMEX). Co-pays are due at the time of your appointment."
  }
];

export default function Visit() {
  const { width = 0, height = 0 } = useWindowSize();
  
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
          Your First Visit
          </div>
          <br/>
          <div style={{fontSize: '20px'}}>
            We look forward to providing you with our best care. 
            Don't forgot to bring your ID and insurance, 
            and please arrive 15 minutes before your appointment time.</div>
        </div>
      </div>
      
      {/* HEADER 2*/}
      <div>
        <div style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
          {width > 1000 && <div style={{flex: 1, marginLeft: '100px'}}>
            <Image style={{borderRadius: '10px 50px 10px 50px'}} src='/office.png' height={500} width={500} alt=""/>
          </div>}
          <div style={{flex: 1, marginRight: '100px', marginLeft: '100px'}}>
            <Bar/>
            <br/>
            <h1 style={{color: 'black'}}>We're excited to see you!</h1>
            <br/>
            <p>
              We know that your first visit to a doctor can sometimes be stressful, 
              but we are confident that you'll soon feel comfortable with our 
              experienced team of professionals health care providers.<br/><br/>

              You'll be in good hands, but in case you have any questions 
              or concerns before your appointment, don't hesitate to contact 
              our office and we'd be happy to provide answers.<br/><br/>

              Below, you can also find a few of the frequently asked 
              questions we often hear from new patients as well.
            </p>
          </div>
        </div>
      </div>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Faqs faqs={questionsAndAnswers}/>
      <br/>
      <br/>
      
      <Footer/>
    </>
  );
}
