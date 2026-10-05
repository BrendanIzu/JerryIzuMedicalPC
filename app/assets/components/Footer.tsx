import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-purple">
      <div className="page-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/foot.png" width={110} height={104} alt=""></Image>
        </div>
        <div>
          <h3>Our Location</h3>
          <p className="mt-2">
            23206 Lyons Avenue
            <br />
            Suite 112
            <br />
            Newhall, CA 91321-2671
          </p>
          <Link
            className="mt-1 inline-block text-pink hover:text-dark-purple"
            href="https://www.google.com/maps/place/23206+Lyons+Ave+%23+112,+Newhall,+CA+91321/@34.3790581,-118.5410498,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2868b85c00cdb:0xce94316e9f2f2f4a!8m2!3d34.3790581!4d-118.5384749!16s%2Fg%2F11lkj6_zzt?entry=ttu"
          >
            Get Directions
          </Link>
        </div>
        <div>
          <h3>Our Hours</h3>
          <p className="mt-2">
            Monday through Friday
            <br />
            9AM - 5PM
          </p>
        </div>
        <div>
          <h3>Phone</h3>
          <Link
            className="mt-2 inline-block text-pink hover:text-dark-purple"
            href="tel:6613125799"
          >
            (661) 312-5799
          </Link>
          <h3 className="mt-6">Fax</h3>
          <p className="mt-2">(661) 516-2913</p>
        </div>
      </div>
    </footer>
  );
}
