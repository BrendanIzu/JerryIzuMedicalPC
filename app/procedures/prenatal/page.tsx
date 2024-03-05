'use client';

import Image from "next/image";
import NavBar from "../../assets/components/NavBar";
import { useWindowSize } from "usehooks-ts";
import Bar from "@/app/assets/components/Bar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";
import Section from "@/app/assets/components/Section";

const services = [
  "Safe pre-pregnancy assessment and counseling",
  "Recurrent miscarriage evaluation and counseling",
  "Early pregnancy genetic counseling",
  "Low-risk pregnancy care",
  "Pregnancy care for women over 35 years old",
  "High-risk pregnancy care",
  "Pregnancy care for women with pre-existing medical conditions",
  "Operative obstetrics and cesarean section",
  "Cord blood banking"
];

export default function Info() {
  const { width = 0, height = 0 } = useWindowSize();
  
  return (
    <>
      <NavBar/>
      
      <Section 
        title={"Prenatal Care & Obstetrics"} 
        subtitle={"Our obstetrical services include pre-pregnancy, \
          pregnancy and post-pregnancy care plans for \
          both normal and high-risk pregnancies."} 
        image={"/basket.png"} 
        position={"title"}/>
        
      <Section 
        title={"Congratulations!"} 
        subtitle={"Thank you for considering our practice for your obstetrical care. \n\n\
          Dr. Jerry K. Izu has decades of experience helping women throughout the entire process. \
          He will supervise and orchestrate all your care including the delivery of your baby. \n\n\
          We’re excited to be a supportive part of your growing family."} 
        image={"/scrabble.png"} 
        position={"section"}/>
 
      <br/>
      <br/>
      <br/>
      
      <Services title='Our Prenatal & Childbirth Services' services={services}/>
      
      {/* INFO */}
      <div className="flex justify-center m-16 flex-wrap">
        
        {/* COL 1 */}
        <div style={{flex: 1, margin: '50px'}}>
          <div style={{marginBottom: '70px'}}>
            <Bar/>
            <br/>
            <br/>
            <h1 style={{color: 'black'}}>What should you expect?</h1>
            <br/>
            <p>
              During each trimester, information regarding your pregnancy can<br/>
              change as your baby continues to grow. Therefore, it’s important to be<br/>
              aware of the different best practices and lifestyle choices that may<br/>
              impact the health of your child.
            </p>
          </div>
          <div className="info">
            <br/>
            <h2>Stages of Pregnancy</h2>
            <br/>
            <div style={{display: 'flex'}}>
              <div style={{backgroundColor: '#f5a9de', padding: '10px', paddingLeft: '15px', paddingRight: '20px'}}>
                <h4 style={{color: 'white'}}>1st Trimester</h4>
                <p style={{fontSize: '13px', color: 'white'}}>1 to 12 weeks</p>
              </div>
              <div style={{backgroundColor: '#ef9ad6', padding: '10px', paddingLeft: '15px', paddingRight: '20px'}}>
              <h4 style={{color: 'white'}}>2nd Trimester</h4>
                <p style={{fontSize: '13px', color: 'white'}}>13 to 28 weeks</p>
              </div>
              <div style={{backgroundColor: '#e897e1', padding: '10px', paddingLeft: '15px', paddingRight: '20px'}}>
              <h4 style={{color: 'white'}}>3rd Trimester</h4>
                <p style={{fontSize: '13px', color: 'white'}}>29 to Delivery</p>
              </div>
              {width > 1300 && <div className="arrow-right"></div>}
            </div>
          </div>
          <div className="info">
            <br/>
            <h2>Medications During Pregnancy</h2>
            <br/>
            <h4>Safe Medications</h4>
            <ul>
              <li>Mylicon <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for gas relief</span></li>
              <li>Colace or Metamucil for constipation <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for gas relief</span></li>
              <li>Monistat (3 or 7-day cream) <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for yeast infection (only apply with fingers)</span></li>
              <li>Robitussin (regular strength) <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for cough</span></li>
              <li>Claritin or Zyrtec <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for runny nose and allergies</span></li>
              <li>Cepacol <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for throat lozenges (sore throat)</span></li>
              <li>Kaopectate <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for diarrhea</span></li>
              <li>Calcium (1200mg per day)</li>
              <li>Lanolin <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>for sore, cracked nipples</span></li>
              <li>Novacaine <span style={{fontStyle:'italic', fontWeight: 200, fontSize: '14px'}}>if dental work, must be double-shielded for x-rays</span></li>
              <br/>
              <h4>Safe Antibiotics</h4>
              <li>Amoxicillan</li>
              <li>Ceftin</li>
              <li>Keflex</li>
              <li>Penicillan</li>
            </ul>
            <br/>
            <p style={{fontStyle: 'italic'}}>For more details specific to your specific care, please visit your provider.</p>
          </div>
        </div>
        
        {/* COL 2 */}
        <div style={{flex: 1, margin: '50px'}}>
          <div style={{flex: 1}}>
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src='/heartbox.png' height={500} width={500} alt=""/>
          </div>
          <div className='info'>
            <br/>
            <h2>Restrictions to Keep in Mind</h2>
            <br/>
            <h4>Hair & Nails</h4>
            <br/>
            <p>
              During your pregnancy, you may get your hair colored or a perm after 
              12 weeks and only twice during pregnancy. You can always get your 
              nails done but choose your salon wisely. You want to use less-toxic 
              polish, be in a clean environment (since antibiotics to cure an infection 
              is the last thing you want) and a well-ventilated space to limit the 
              fumes you inhale.
            </p>
            <br/>
            <h4>Dietary</h4>
            <br/>
            <p>
            Only eat fish a maximum of twice per week, but no swordfish, shark, 
            sushi or crawfish. Sorry, but coffee is not allowed, however if it is a
             must-have, please only consume decaf or less than 1 cup a day.<br/><br/>
            </p>
            <br/>
            <h4>Other Restrictions</h4>
            <br/>
            <p>
            You are generally safe flying until 28 weeks into your pregnancy.
            <br/><br/>
            Going to the gym is safe, but no high impact excercise. Low impact activities such as yoga, walking, low weight lifting for upper body (arms) are safe. During your third trimester you should avoid foot massages as it can stimulate labor.
            <br/><br/>    
            No alcohol, cigarettes or drugs at any time during pregnancy.
            <br/><br/>      
            Lastly, remember to take your prenatal vitamins every day and do not use the hot tub or jacuzzi during your pregnancy.
            </p>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}
