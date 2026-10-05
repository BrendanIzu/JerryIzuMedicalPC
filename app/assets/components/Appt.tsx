import Link from "next/link";

export default function Appt() {
  return (
    <div className="page-x flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-16">
      <Link
        className="px-7 py-3 rounded-full bg-pink text-white font-medium shadow-sm hover:bg-light-pink"
        href="https://l.klara.com/AW9DWTCmJzfHFXCK"
      >
        Make an Appointment
      </Link>
      <Link className="font-medium hover:text-pink" href="/info">
        Meet Our Providers →
      </Link>
    </div>
  );
}
