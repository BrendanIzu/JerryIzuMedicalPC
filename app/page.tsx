import Link from "next/link";
import Image from "next/image";

import NavBar from "./assets/components/NavBar";
import Footer from "./assets/components/Footer";
import Offerings from "./assets/components/Offerings";
import Appt from "./assets/components/Appt";
import Section from "./assets/components/Section";
import Treatments from "./assets/components/Treatments";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="page-x grid items-center gap-10 py-8 md:grid-cols-2 md:py-12">
        <div>
          <h1>Specializing in Obstetrics & Gynecology for over 25 years.</h1>
          <h2 className="mt-5">
            Providing the best medical care for every aspect of a woman’s
            health — every step of the way.
          </h2>
          <Link
            className="mt-8 inline-block px-7 py-3 rounded-full bg-pink text-white font-medium shadow-sm hover:bg-light-pink"
            href="https://l.klara.com/AW9DWTCmJzfHFXCK"
          >
            Make an Appointment
          </Link>
        </div>
        <div>
          <Image
            className="h-auto w-full"
            src="/homepage-hero.png"
            alt=""
            width={1000}
            height={1000}
            priority
          />
        </div>
      </section>

      <Offerings />

      <div className="flex justify-center mt-8">
        <Link className="font-medium hover:text-pink" href="/procedures">
          View All Services →
        </Link>
      </div>

      <Treatments />

      <Section
        title={"You’re in good hands."}
        subtitle={
          "Whether you’re new to womanhood or beyond menopause, \
        we’re here with you and always strive to create a comfortable, \
        caring environment. \n\n\
        Dr. Izu has been serving Santa Clarita residents since 2011 and offers \
        a wide variety of obstetrical and gynecological \
        services. In addition to routine prenatal care, well-women exams and \
        gynecological surgery, we also address the medical issues \
        concerning teens and menopausal women. \n\n\
        Our health care providers and staff are committed to treat each \
        patient with dignity, respect, kindness and courtesy. \
        In meeting our patient’s needs we believe that every woman \
        is special in her own way. \n\n\
        Whether it’s for a routine exam or an extensive surgery, \
        we hope to be attending to your health soon in the best way possible. \
        If you have any questions, please do not hesitate to reach out."
        }
        image={"/homepage-hero2.png"}
        position={"section"}
      />

      <Appt />
      <Footer />
    </>
  );
}
