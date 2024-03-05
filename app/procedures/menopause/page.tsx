import NavBar from "../../assets/components/NavBar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";
import Faqs from "@/app/assets/components/Faqs";
import Section from "@/app/assets/components/Section";

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
  return (
    <>
      <NavBar/>
      <Section 
        title={"Menopause & Beyond"} 
        subtitle={"We offer personalized care as your body \
          transitions through the phases of menopause."} 
        image={"/meno1.jpeg"} 
        position={"title"}/>
        
      <Section 
        title={"The Wise-Woman Years"} 
        subtitle={"Welcome to your “wise-woman years”. \n\n\
          Perimenopause and menopause are the stages of a woman’s life when her \
          monthly period stops, along with other physical and emotional changes \
          that are often overlooked.\n\n\
          As a woman’s reproductive years end, this is a beginning of \
          a new stage of life and we are here for you every step of the way."} 
        image={"/meno2.jpeg"} 
        position={"section"}/>
        
      <Section 
        title={"Perimenopause vs Menopause"} 
        subtitle={"Perimenopause is the first, transitional stage in the \
          process with an average length of 4 years. Though for some women, \
          this may begin 8-10 years before menopause.\n\n\
          During this stage, the ovaries make less estrogen, menstrual cycles \
          start to change (becoming irregular and then stopping) and you may \
          experience physical changes. Some common side effects are breast tenderness, \
          worsening PMS and irregular/skipping periods.\n\n\
          Menopause is when a woman no longer has menstrual periods for at least 12 months, \
          which usually occurs for women in the late 40s to early 50s. At this point, \
          ovaries are no longer producing high levels of hormones.\n\n\
          During this time, some common symptoms may include hot flashes, \
          night sweats, sleeping problems, viginal dryness, urinary urgency, \
          emotional changes (irritability, mood swings, depression), dry skin and \
          lack of sexual desire.\n\n\
          Other troublesome symptoms of menopause can be called \"senior moments\" \
          or \"bad hair days\", where our brains might not seem to work as well. \
          Some believe this can be magnified by the lack of hormones."} 
        image={"/meno3.png"} 
        position={"reversed"}/>
      
      <Services title='Our Menopause Management' services={services}/>
      
      <div className="mx-16 my-8">
        <div className="flex justify-around items-center flex-wrap">
          <div className="w-144 h-152 bg-purple p-5 rounded-md shadow">
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
          
            <br/>
          
            <div className="w-144 h-152 bg-purple p-5 rounded-md shadow">
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
