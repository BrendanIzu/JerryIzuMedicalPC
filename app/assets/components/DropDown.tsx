import Link from "next/link";

export default function DropDown() {
  return (
    <>
      <div className="group">
        <h5>Services We Provide</h5>
        <div className="group-hover:block hidden absolute">
          <div className="mt-3 inline-flex p-6 gap-4 flex-col bg-purple rounded-lg shadow">
            <Link className="text-black hover:text-pink" href="/procedures/gynecology">
              <h5>Gynecology</h5>
            </Link>
            <Link className="text-black hover:text-pink" href="/procedures/prenatal">
              <h5>Prenatal Care & Obstetrics</h5>
            </Link>
            <Link className="text-black hover:text-pink" href="/procedures/postnatal">
              <h5>Postnatal Care</h5>
            </Link>
            <Link className="text-black hover:text-pink" href="/procedures/menopause">
              <h5>Menopause & Beyond</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
