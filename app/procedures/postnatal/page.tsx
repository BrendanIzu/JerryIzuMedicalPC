import NavBar from "../../assets/components/NavBar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";
import Section from "@/app/assets/components/Section";
import Stages from "@/app/assets/components/Stages";

const services = [
  "Postpartum check-ups and recovery care",
  "Cesarean section recovery",
  "Contraception options after delivery",
  "Breast health and breastfeeding concerns",
  "Postpartum mood changes and depression support",
  "Iron deficiency anemia",
  "Pelvic floor dysfunction such as urinary incontinence"
];

export default function Info() {
  return (
    <>
      <NavBar/>
      <Section 
        title={"Postnatal Care"}  
        subtitle={"We will work to make sure your own personal \
          recovery goes smoothly, while your baby remains \
          healthy and without complications."} 
        image={"/mother.jpeg"} 
        position={"title"}/>
        
      <Section 
        title={"Understanding the changes that come after childbirth."} 
        subtitle={"After going through childbirth, it is essential that you recover \
          both mentally and physically. As you are entering a chapter for your \
          family and motherhood, there is often a period of adjustment needed. \n\n\
          We have seen thousands of women go through this process and we hope to \
          be there for you during this time as well to answer any questions you \
          may have. Beyond learning to care for your baby though, it is vital to \
          care for yourself in this period.\n\n\
          Rest, recovery and proper nutrition can all be beneficial to your \
          well-being, and there is no time more important to prioritize it than now. \
          With us, we’ll be there to help guide you along the way."} 
        image={"/hands.png"} 
        position={"section"}/> 
      
      <section className="page-x grid items-start gap-5 py-8 md:grid-cols-2">
        <div className="info">
          <h4>Tips For Healthy Recovery</h4>
          <ul className="mt-3 list-disc pl-5">
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
        <Stages stages={[
          {name: 'Childbirth', timing: 'Delivery'},
          {name: 'Postnatal Period', timing: '6 to 8 weeks later'},
        ]}/>
      </section>

      <Services title='Our Postnatal Services' services={services}/>
      <Footer/>
    </>
  );
}
