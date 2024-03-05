import NavBar from "../../assets/components/NavBar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";
import Faqs from "@/app/assets/components/Faqs";
import Section from "@/app/assets/components/Section";

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
  return (
    <>
      <NavBar/>
      <Section 
        title={"Gynecology"} 
        subtitle={"We provide preventative, diagnostic and \
          specialized gynecologic services for women."} 
        image={"/flowers.png"} 
        position={"title"}/>
        
      <Section 
        title={"Providing a comfortable environment."} 
        subtitle={"When you enter our practice, our hope is that you will feel \
          comfortable enough to ask our staff any questions you may have \
          regarding your health. \n\n\
          With decades of experience, our staff strive to create a caring \
          environment for patients. Beyond reproductive health care, \
          we always do our best to help with our patients’ overall health.\n\n\
          Whether you are coming in for your annual check up or because there \
          are areas of concern, we plan to be there for you every step of the way."}  
        image={"/tools.png"} 
        position={"section"}/>
  
      <Services title='Our Gynecologic Services' services={services}/>
      <br/>
      <Faqs faqs={questionsAndAnswers}/>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}
