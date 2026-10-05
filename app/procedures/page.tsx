import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";
import Bar from "../assets/components/Bar";
import Offerings from "../assets/components/Offerings";
import { Services } from "../assets/components/Services";
import Treatments from "../assets/components/Treatments";

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

export default function Procedures() {
  return (
    <>
      <NavBar/>
      <section className="page-x py-8 md:py-12">
        <Bar/>
        <h1 className="mt-6">Our Services</h1>
        <h2 className="mt-5 max-w-3xl">
          We're here to provide a variety of services to our patients, 
          ensuring the best and most comprehensive care. Here are the 
          specializations of our practice and the full list of services below.
        </h2>
      </section>
      <Offerings/>
      <Treatments/>
      <Services title='Available Services' services={services}/>
      <Footer/>
    </>
  );
}
