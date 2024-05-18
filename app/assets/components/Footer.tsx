import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-evenly flex-wrap bg-purple p-24 pl-2 gap-12">
      <div className="w-64">
        <Image src="/foot.png" width={180} height={180} alt=""></Image>
      </div>
      {/* <div className="w-64">
        <h3>Our Location</h3>
        <p>Smyth Medical Plaza<br/>
          27871 Smyth Drive #102<br/>
          Valencia, CA 91355</p>
        <Link className="text-pink hover:text-dark-purple"
          href='https://www.google.com/maps/place/Valencia+Gynecology+Associates/@34.440085,-118.5702101,17z/data=!4m5!3m4!1s0x0:0xde3eff1f52abe20c!8m2!3d34.439771!4d-118.5678166?shorturl=1'>
          Get Directions
        </Link>
      </div> */}
      <div className="w-64">
        <h3>Our Hours</h3>
        <p>
          Monday through Friday
          <br />
          9AM - 5PM
        </p>
      </div>
      <div className="w-64">
        <div>
          <h3>Phone</h3>
          <Link
            className="text-pink hover:text-dark-purple"
            href="tel:6612591781"
          >
            (661) 312-5799
          </Link>
        </div>
        {/* <div className="my-8">
          <h3>Fax</h3>
          <Link
            className="text-pink hover:text-dark-purple"
            href="tel:6612594571"
          >
            (661) 259-4571
          </Link>
        </div> */}
      </div>
    </div>
  );
}
