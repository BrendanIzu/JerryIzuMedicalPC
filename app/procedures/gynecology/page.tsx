'use client'

import Link from "next/link";
import Image from "next/image";
import NavBar from "../../assets/components/NavBar";
import Footer from "@/app/assets/components/Footer";
import { useWindowSize } from "usehooks-ts";
import Bar from "@/app/assets/components/Bar";
import { Services } from "@/app/assets/components/Services";
import Faqs from "@/app/assets/components/Faqs";

const services = [
  "Well Woman Exam",
  "Contraception options",
  "Sexually Transmitted Infections",
  "Hormonal Management",
  "Menstrual issues such as pain, bleeding or infrequent menses",
  "Iron Deficiency Anemia due to heavy menses",
  "Breast health",
  "Ectopic Pregnancy with knowledge of immediate medical treatment",
  "Infertility Evaluation & Assisted Fertility Treatment",
  "Egg preservation counseling",
  "Fibroids and uterine dysfunction",
  "Polycystic Ovarian Syndrome (PCOS)",
  "Ovarian Cysts",
  "Premenstrual Tension (PMS)",
  "Abnormal Pap Smear management (Colposcopy, Cryotherapy)",
  "Hysteroscopic out-patient surgeries (Endometrial Ablation) for heavy menses",
  "Minimally-invasive, same-day surgeries (Laparoscopic) for Hysterectomies, Ovarian Cysts, Benign and Cancerous surgeries",
  "Medical & Surgical Management of Endometriosis",
  "Pelvic pain",
  "Pelvic Floor Dysfunction such as urinary incontinence",
  "Urinary Tract Infections (UTI)",
  "Hereditary Cancer Risk Evaluation and Treatment",
  "Bone Density Issues"
];

const questionsAndAnswers = [
  { 
    question: "When should I start getting pap smears?",
    answer: "Pap smears are typically recommended starting at age 21. \
    However, if you've been sexually active, it's essential to get checked \
    for infections earlier."
  },
  { 
    question: "What to do if I miss a birth control pill?",
    answer: "Generally, take the missed pill the next day along with your scheduled pill. \
    If you miss 2 days in a row, take 2 pills for 2 days straight. \
    Your period might occur. Missing more than 2 days increases pregnancy risk; \
    consult your healthcare provider."
  },
  { 
    question: "Do I need to see a doctor if I skip periods?",
    answer: "Yes. Skipped periods could indicate a hormonal imbalance. \
    Consulting a healthcare professional can lead to diagnosis and proper treatment."
  },
  { 
    question: "Are there recommended vitamins or supplements?",
    answer: "Prenatal vitamins, starting from age 13 (when menstruation begins) \
    to 55 (after menopause), can help prevent issues like anemia, common in many women. \
    Choose gluten-free and readily available brands for optimal absorption."
  },
  { 
    question: "Should I be concerned about heavy bleeding?",
    answer: "Yes. Heavy bleeding can sometimes lead to the need for blood transfusions. \
    Proper diagnosis and treatment are crucial. Consult your healthcare provider."
  },
  { 
    question: "How to manage mood swings before periods?",
    answer: "Moodiness and personality changes before periods are common symptoms of \
    Premenstrual Tension Syndrome (PMS). Treatments are available to alleviate these \
    symptoms. Talk to your healthcare provider."
  },
  { 
    question: "How often should I get pap smears?",
    answer: "Pap smears are usually recommended every 2-3 years starting at age 21, \
    if results are normal. However, annual checkups are strongly advised for overall \
    women's health."
  }
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
            <h1 style={{color: 'black'}}>Gynecology</h1>
            <br/>
            <h2>
              We provide preventative, diagnostic and <br/>specialized gynecologic 
              services for women.
            </h2>
          </div>
          {width > 1000 && <div style={{flex: 1, marginRight: '100px'}}>
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src='/flowers.png' height={500} width={500} alt=""/>
          </div>}
        </div>
      </div>
      
      {/* HEADER 2*/}
      <div>
        <div style={{marginTop: '100px', display: 'flex', alignItems: 'center'}}>
          {width > 1000 && <div style={{flex: 1, marginLeft: '100px'}}>
            <Image style={{borderRadius: '10px 50px 10px 50px'}} src='/tools.png' height={500} width={500} alt=""/>
          </div>}
          <div style={{flex: 1, marginRight: '100px', marginLeft: '100px'}}>
            <Bar/>
            <br/>
            <br/>
            <h1 style={{color: 'black'}}>Providing a comfortable environment.</h1>
            <br/>
            <p>
              When you enter our practice, our hope is that you will feel 
              comfortable enough to ask our staff any questions you may have 
              regarding your health.<br/><br/>

              With decades of experience, our staff strive to create a caring 
              environment for patients. Beyond reproductive health care, 
              we always do our best to help with our patients’ overall health.<br/><br/>

              Whether you are coming in for your annual check up or because there 
              are areas of concern, we plan to be there for you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <Services title='Our Gynecologic Services' services={services}/>
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
