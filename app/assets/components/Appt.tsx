import Link from "next/link";

export default function Bar() {
  return (
    <>
      <div className="flex m-20 justify-center items-center">
        <Link
          className="px-7 py-3 rounded-full bg-pink text-white hover:bg-light-pink"
          href="https://l.klara.com/AW9DWTCmJzfHFXCK"
        >
          Make an Appointment
        </Link>
        <div className="px-8 hover:text-pink">
          <Link href="/info">Meet Our Providers</Link>
        </div>
      </div>
    </>
  );
}
