import NavBar from "../assets/components/NavBar";
import Bar from "../assets/components/Bar";
import Footer from "../assets/components/Footer";
import Faqs from "../assets/components/Faqs";
import Section from "../assets/components/Section";

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
  return (
    <>
      <NavBar/>
      <div className="m-16">
        <div>
          <Bar/>
          <br/>
          <br/>
          <h1>Your First Visit</h1>
          <br/>
          <h2>
            We look forward to providing you with our best care. 
            Don't forgot to bring your ID and insurance, 
            and please arrive 15 minutes before your appointment time.
          </h2>
        </div>
      </div>
      
      <Section 
        title={"We're excited to see you!"} 
        subtitle={"We know that your first visit to a doctor can sometimes be stressful, \
          but we are confident that you'll soon feel comfortable with our \
          experienced team of professionals health care providers. \n\n\
          You'll be in good hands, but in case you have any questions \
          or concerns before your appointment, don't hesitate to contact \
          our office and we'd be happy to provide answers. \n\n\
          Below, you can also find a few of the frequently asked \
          questions we often hear from new patients as well."} 
        image={"/office.png"} 
        position={"section"}/>
    
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
