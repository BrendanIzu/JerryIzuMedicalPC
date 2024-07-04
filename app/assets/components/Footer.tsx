import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-evenly flex-wrap bg-purple p-24 pl-2 gap-12">
      <div className="w-64">
        <Image src="/foot.png" width={180} height={180} alt=""></Image>
      </div>
      <div className="w-64">
        <h3>Our Location</h3>
        <p>
          23206 Lyons Avenue
          <br />
          Suite 112
          <br />
          Newhall, CA 91321-2671
        </p>
        <Link
          className="text-pink hover:text-dark-purple"
          href="https://www.google.com/maps/place/23206+Lyons+Ave+%23+112,+Newhall,+CA+91321/@34.3790581,-118.5410498,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2868b85c00cdb:0xce94316e9f2f2f4a!8m2!3d34.3790581!4d-118.5384749!16s%2Fg%2F11lkj6_zzt?entry=ttu"
        >
          Get Directions
        </Link>
      </div>
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
