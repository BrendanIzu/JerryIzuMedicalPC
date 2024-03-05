import NavBar from "../assets/components/NavBar";
import Footer from "../assets/components/Footer";
import Bar from "../assets/components/Bar";

export default function Contact() {
  return (
    <>
      <NavBar/>
      <div className="m-24">
        <Bar/>
        <br/>
        <h1>We're looking forward to hearing from you!</h1>
        <br/>
        <h2>
          Call our office to make an appointment and we'll 
          do our best to care of your health and well-being.
        </h2>
        <p className="italic">
          For life-threatening emergencies, call "911" or 
          proceed to the nearest emergency department.
        </p>
      </div>
      <Footer/>
    </>
  );
}
