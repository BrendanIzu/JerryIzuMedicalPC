import Image from "next/image";

import NavBar from "../assets/components/NavBar";
import Bar from "../assets/components/Bar";
import Staff from "../assets/components/Staff";
import Footer from "../assets/components/Footer";

import { Person } from "../interfaces/Person";

import { staffInfo } from "../assets/staffInfo";

export default function Info() {
  return (
    <>
      <NavBar />
      <section className="page-x py-8 md:py-12">
        <Bar />
        <h1 className="mt-6">Our Providers</h1>
        <h2 className="mt-5 max-w-3xl">
          Our mission statement is to provide the best care at the right time
          for the right patients because we care about your experience.
        </h2>
        <h2 className="mt-5 max-w-3xl">
          We offer general obstetrics, high risk obstetrics as well as
          gynecology and specialty care (infertility, hormonal therapy such as
          bioidenticals and hormone pellet treatments for menopause),
          hereditary cancer evaluation. We believe in partnering with our
          patients to make a true difference in their health.
        </h2>
      </section>

      <section className="page-x flex flex-col gap-6 py-8">
        {staffInfo.map((person: Person) => (
          <Staff key={person.title} person={person} />
        ))}
      </section>

      <section className="page-x py-12 md:py-16">
        <Bar />
        <h1 className="mt-6">Hospital Affiliations</h1>
        <div className="mt-8 max-w-md">
          <Image
            className="h-auto w-full rounded-xl"
            src="/holycross.jpeg"
            height={500}
            width={500}
            alt="Holy Cross Hospital"
          />
          <h3 className="mt-4">Holy Cross Hospital</h3>
          <p>Mission Hills</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
