'use client';

import Link from "next/link";
import Image from "next/image";
import NavBar from "../../assets/components/NavBar";
import { useWindowSize } from "usehooks-ts";
import Bar from "@/app/assets/components/Bar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";
import Faqs from "@/app/assets/components/Faqs";

const services = [
  "Non-hormonal Therapies (supplements and other recommendations)",
  "Bioidentical Hormone Therapy",
  "BioTE Pellet Therapy (Hormone Therapy)",
  "Traditional Hormone Therapy"
];

const questionsAndAnswers = [
  {
    question: "What age do women go through menopause?",
    answer: "Menopause is defined as the absence of regular periods for one year. It typically occurs between ages 48 and 52, but can vary depending on family history."
  },
  {
    question: "What are the most common symptoms of menopause?",
    answer: "Many women experience subtle changes in mood, body temperature (hot flashes), and sleep disturbances (insomnia). Difficulty sleeping through the night and vaginal dryness are also common symptoms. Weight shifting to the abdomen and buttocks can occur as well."
  },
  {
    question: "Are there non-hormonal treatments for menopause?",
    answer: "Yes, certain herbal and over-the-counter therapies can help alleviate menopausal symptoms, including vaginal dryness and diminished sexual desire."
  },
  {
    question: "Do you offer non-traditional hormonal therapies?",
    answer: "Yes, we offer bioidentical hormone therapy and pellet therapy."
  }
];

export default function Menopause() {
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
            <h1 style={{color: 'black'}}>Menopause & Beyond</h1>
            <br/>
            <h2>
              We will work to make sure your own personal<br/> 
              recovery goes smoothly, while your baby remains<br/> 
              healthy and without complications.
            </h2>
          </div>
          {width > 1000 && <div style={{flex: 1, marginRight: '100px'}}>
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src='/meno1.jpeg' height={500} width={500} alt=""/>
          </div>}
        </div>
      </div>
      
      {/* HEADER 2 */}
      <div>
        <div style={{marginTop: '100px', display: 'flex', alignItems: 'center'}}>
          {width > 1000 && <div style={{flex: 1, marginLeft: '100px'}}>
            <Image style={{borderRadius: '10px 50px 10px 50px'}} src='/meno2.jpeg' height={500} width={500} alt=""/>
          </div>}
          <div style={{flex: 1, marginRight: '100px', marginLeft: '100px'}}>
            <Bar/>
            <br/>
            <br/>
            <h1 style={{color: 'black'}}>The Wise-Woman Years</h1>
            <br/>
            <p>
              Welcome to your “wise-woman years”.<br/><br/>

              Perimenopause and menopause are the stages of a woman’s life when her<br/>
              monthly period stops, along with other physical and emotional changes<br/>
              that are often overlooked.<br/><br/>

              As a woman’s reproductive years end, this is a beginning of<br/>
               a new stage of life and we are here for you every step of the way.
            </p>
          </div>
        </div>
      </div>
      
      {/* HEADER 3 */}
      <div>
        <div style={{marginTop: '100px', display: 'flex', alignItems: 'center'}}>
          <div style={{flex: 1, marginRight: '100px', marginLeft: '100px'}}>
            <Bar/>
            <br/>
            <br/>
            <h1 style={{color: 'black'}}>Perimenopause vs Menopause</h1>
            <br/>
            <p>
              Perimenopause is the first, transitional stage in the process with an<br/>
              average length of 4 years. Though for some women, this may begin 8-10<br/>
              years before menopause.<br/><br/>

              During this stage, the ovaries make less estrogen, menstrual cycles<br/>
              start to change (becoming irregular and then stopping) and you may<br/>
              experience physical changes. Some common side effects are breast<br/>
              tenderness, worsening PMS and irregular/skipping periods.<br/><br/>

              Menopause is when a woman no longer has menstrual periods for at<br/>
              least 12 months, which usually occurs for women in the late 40s to<br/>
              early 50s. At this point, ovaries are no longer producing high levels of<br/>
              hormones.<br/><br/>

              During this time, some common symptoms may include hot flashes, <br/>
              night sweats, sleeping problems, viginal dryness, urinary urgency, <br/>
              emotional changes (irritability, mood swings, depression), dry skin and <br/>
              lack of sexual desire.<br/><br/>

              Other troublesome symptoms of menopause can be called "senior <br/>
              moments" or "bad hair days", where our brains might not seem to work <br/>
              as well. Some believe this can be magnified by the lack of hormones.
            </p>
          </div>
          {width > 1000 && <div style={{flex: 1}}>
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src='/meno3.png' height={500} width={500} alt=""/>
          </div>}
        </div>
      </div> 
      <br/>
      <br/> 
      <Services title='Our Menopause Management' services={services}/>
      
      {/* INFO */}
      <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', marginLeft: '50px', marginRight: '50px', marginBottom: '100px'}}>
        <div className='info'>
          <h4>Non-Hormonal Therapies</h4>
          <br/>
          <p>
            We offer menopausal guidance and advice, ranging from non-hormonal<br/> 
            supplements to dietary and lifestyle recommendations.
          </p>
          <br/>
          <h4>Bioidentical Therapy</h4>
          <br/>
          <p>
            Plant-based, "weaker" and yet effective use of all female hormones.<br/> 
            Considered a "natural" solution, it solves deficiencies by supplementing<br/> 
            hormones identical to our own body's hormones.<br/> 
          </p>
        </div>
        
        <div className='info'>
          <h4>BioTE Pellet Therapy (Hormone Therapy)</h4>
          <br/>
          <p>
            Millions of individuals are impacted by hormone imbalance every day. From<br/>
            fatigue to weight gain to severe mood changes to low libido, many are left with<br/>
            feelings of frustration and discomfort, unaware of how they may alleviate<br/>
            these common issues.<br/><br/>

            Dr. Izu specializes in addressing these and other indicators of aging through<br/>
            precise personalized patient care plans that optimize hormones and improve<br/>
            quality of life.<br/><br/>
          </p>
          <br/>
          <h4>Traditional Hormone Therary</h4>
          <br/>
          <p>
            Plant-based, "weaker" and yet effective use of all female hormones.<br/> 
            Considered a "natural" solution, it solves deficiencies by supplementing<br/> 
            hormones identical to our own body's hormones.<br/> 
          </p>
        </div>
      </div>
      
      <Faqs faqs={questionsAndAnswers}/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Footer/>
    </>
  );
}
