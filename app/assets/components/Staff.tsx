import Image from 'next/image'

import { Person } from "@/app/interfaces/Person";

interface Props {
  person: Person
}

export default function Staff({person} : Props) {
  return (
    <div className="flex flex-col gap-8 rounded-xl bg-purple p-7 md:flex-row md:p-10">
      <div className="shrink-0">
        <Image
          className="rounded-2xl object-cover"
          src={person.picture}
          alt={person.title}
          width={180}
          height={180}
        />
      </div>
      <div>
        <h2 className="text-[#1f1a21]">{person.title}</h2>
        <p className="mt-4">{person.about}</p>
        <p className="mt-4">{person.additional}</p>
      </div>
    </div>
  );
}
