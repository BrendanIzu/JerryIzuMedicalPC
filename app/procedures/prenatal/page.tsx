import Image from "next/image";
import NavBar from "../../assets/components/NavBar";
import Bar from "@/app/assets/components/Bar";
import Footer from "@/app/assets/components/Footer";
import { Services } from "@/app/assets/components/Services";
import Section from "@/app/assets/components/Section";
import Stages from "@/app/assets/components/Stages";

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

      <Services title='Our Prenatal & Childbirth Services' services={services}/>
      
      <section className="page-x grid gap-5 py-12 md:grid-cols-2 md:py-16">
        <div className="flex flex-col gap-5">
          <div className="pb-4">
            <Bar/>
            <h1 className="mt-6">What should you expect?</h1>
            <p className="mt-5">
              During each trimester, information regarding your pregnancy can
              change as your baby continues to grow. Therefore, it’s important to be
              aware of the different best practices and lifestyle choices that may
              impact the health of your child.
            </p>
          </div>
          <Stages stages={[
            {name: '1st Trimester', timing: '1 to 12 weeks'},
            {name: '2nd Trimester', timing: '13 to 28 weeks'},
            {name: '3rd Trimester', timing: '29 to Delivery'},
          ]}/>
          <div className="info">
            <h2>Medications During Pregnancy</h2>
            <h4 className="mt-5">Safe Medications</h4>
            <ul className="mt-2 list-disc pl-5">
              <li>Mylicon <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for gas relief</span></li>
              <li>Colace or Metamucil <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for constipation</span></li>
              <li>Monistat (3 or 7-day cream) <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for yeast infection (only apply with fingers)</span></li>
              <li>Robitussin (regular strength) <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for cough</span></li>
              <li>Claritin or Zyrtec <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for runny nose and allergies</span></li>
              <li>Cepacol <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for throat lozenges (sore throat)</span></li>
              <li>Kaopectate <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for diarrhea</span></li>
              <li>Calcium (1200mg per day)</li>
              <li>Lanolin <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>for sore, cracked nipples</span></li>
              <li>Novocaine <span style={{fontStyle:'italic', fontWeight: 300, fontSize: '14px'}}>if dental work, must be double-shielded for x-rays</span></li>
            </ul>
            <h4 className="mt-5">Safe Antibiotics</h4>
            <ul className="mt-2 list-disc pl-5">
              <li>Amoxicillin</li>
              <li>Ceftin</li>
              <li>Keflex</li>
              <li>Penicillin</li>
            </ul>
            <p className="mt-5 italic">For more details specific to your care, please visit your provider.</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Image className="h-auto w-full" style={{borderRadius: '50px 10px 50px 10px'}} src='/heartbox.png' height={500} width={500} alt=""/>
          <div className='info'>
            <h2>Restrictions to Keep in Mind</h2>
            <h4 className="mt-5">Hair & Nails</h4>
            <p className="mt-2">
              During your pregnancy, you may get your hair colored or a perm after 
              12 weeks and only twice during pregnancy. You can always get your 
              nails done but choose your salon wisely. You want to use less-toxic 
              polish, be in a clean environment (since antibiotics to cure an infection 
              is the last thing you want) and a well-ventilated space to limit the 
              fumes you inhale.
            </p>
            <h4 className="mt-5">Dietary</h4>
            <p className="mt-2">
              Only eat fish a maximum of twice per week, but no swordfish, shark, 
              sushi or crawfish. Sorry, but coffee is not allowed, however if it is a
              must-have, please only consume decaf or less than 1 cup a day.
            </p>
            <h4 className="mt-5">Other Restrictions</h4>
            <p className="mt-2">You are generally safe flying until 28 weeks into your pregnancy.</p>
            <p className="mt-3">Going to the gym is safe, but no high impact exercise. Low impact activities such as yoga, walking, low weight lifting for upper body (arms) are safe. During your third trimester you should avoid foot massages as it can stimulate labor.</p>
            <p className="mt-3">No alcohol, cigarettes or drugs at any time during pregnancy.</p>
            <p className="mt-3">Lastly, remember to take your prenatal vitamins every day and do not use the hot tub or jacuzzi during your pregnancy.</p>
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  );
}
