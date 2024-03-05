import Image from 'next/image'

import { Person } from "@/app/interfaces/Person";

interface Props {
  person: Person
}

export default function Staff({person} : Props) {
  return (
    <>
      <div className="w-96 p-10">
        <div style={{borderRadius: '20px', width: '150px', height: '150px', overflow: 'hidden'}}>
          <Image style={{objectFit: 'cover'}} src={person.picture} alt="" width={150} height={150}></Image>
        </div>
        <h2 className="mt-6 text-black">
          {person.title}
        </h2>
        <p className="mt-6">
          {person.about}
        </p>
      </div>
    </>
  );
}

//
