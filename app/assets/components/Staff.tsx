import Image from 'next/image'

import { Person } from "@/app/interfaces/Person";

interface Props {
  person: Person
}

export default function Staff({person} : Props) {
  return (
    <>
      <div style={{width: '350px', margin: '30px'}}>
        <div style={{borderRadius: '20px', width: '150px', height: '150px', overflow: 'hidden'}}>
          <Image style={{objectFit: 'cover'}} src={person.picture} alt="" width={150} height={150}></Image>
        </div>
        <div style={{color: 'black', fontSize: '20px', marginTop: '40px'}}>
          {person.title}
        </div>
        <p style={{marginTop: '10px'}}>
          {person.about}
          
        </p>
      </div>
    </>
  );
}

//
