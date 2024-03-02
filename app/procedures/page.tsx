import Link from "next/link";
import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";
import Bar from "../assets/components/Bar";
import Offerings from "../assets/components/Offerings";
import { Services } from "../assets/components/Services";

const services = [
  'Annual Exams',
  'Full Obstetrical Care',
  'Well Women Exams',
  'Gynecological Surgery',
  'In-office Endometrial & Colpo Biopsy, Cryotherapy',
  'Birth Control',
  'Contraception Management',
  'STD Testing',
  'BRCA & COLARIS Testing',
  'HPV (Human Papilloma Virus)',
  'Ultrasound',
  'Breast, Gynecological & Menopausal Issues',
  'In-office Pelvic, Obstetrical Ultrasounds & Bone Densities'
]

interface Props {
  title: string
}

const Service = ({title} : Props) => {
  return (
    <div style={{width: 'auto', backgroundColor: '#faf8fb', margin: '10px', padding: '15px', borderRadius: '5px'}}>
      <h3>{title}</h3>
    </div>
  )
}

export default function Procedures() {
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
            Our Services
          </div>
          <br/>
          <div style={{fontSize: '20px'}}>
            We're here to provide a variety of services to our patients, 
            ensuring the best and most comprehensive care. Here are the 
            specializations of our practice and the full list of services below.
          </div>
          <br/>
        </div>
      </div>
      <Offerings/>
      <Services title='Available Services' services={services}/>
      <Footer/>
    </>
  );
}
