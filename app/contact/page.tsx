import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";
import Bar from "../assets/components/Bar";

export default function Contact() {
  return (
    <>
      <NavBar/>
      <section className="page-x py-12 md:py-20">
        <Bar/>
        <h1 className="mt-6">We're looking forward to hearing from you!</h1>
        <h2 className="mt-5 max-w-3xl">
          Call our office to make an appointment and we'll 
          do our best to care for your health and well-being.
        </h2>
        <p className="mt-5 italic">
          For life-threatening emergencies, call "911" or 
          proceed to the nearest emergency department.
        </p>
      </section>
      <Footer/>
    </>
  );
}
