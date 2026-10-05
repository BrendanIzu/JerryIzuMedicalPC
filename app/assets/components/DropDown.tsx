import Link from "next/link";

const links = [
  { href: "/procedures/gynecology", label: "Gynecology" },
  { href: "/procedures/prenatal", label: "Prenatal Care & Obstetrics" },
  { href: "/procedures/postnatal", label: "Postnatal Care" },
  { href: "/procedures/menopause", label: "Menopause & Beyond" },
];

export default function DropDown({ active }: { active: boolean }) {
  return (
    <div className="group relative">
      <Link href="/procedures">
        <h5 className={active ? "text-pink" : ""}>Services We Provide</h5>
      </Link>
      {/* pt-3 keeps the hover area continuous between the link and the menu */}
      <div className="absolute left-0 z-10 hidden pt-3 group-hover:block">
        <div className="flex w-64 flex-col gap-1 rounded-lg bg-white p-3 shadow-lg ring-1 ring-black/5">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 hover:bg-purple">
              <h5>{label}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
