'use client';

import Link from "next/link";

interface Props {
  title: string
  description: string
  path: string
}

const Box = ({title, description, path} : Props) => {
  return (
    <div className='w-72 bg-purple m-2 p-10 rounded-md shadow hover:text-pink'>
      <h3 style={{fontSize: '20px', color: '#db79d4'}}>{title}</h3>
      <br/>
      <p>{description}</p>
      <br/>
      <Link href={path}>Learn more</Link>
    </div>
  )
}

export default function Offerings() {
  return (
    <div className='mt-12 flex justify-center flex-wrap'>
      <Box title='Gynecology'
      path='/procedures/gynecology'
      description='We provide preventative, diagnostic and specialized gynecologic services for women.'/>
      <Box title='Prenatal Care & Obstetrics' 
      path='/procedures/prenatal'
      description='Our obstetrical services include pre-pregnancy, pregnancy and post-pregnancy care plans.'/>
      <Box title='Postnatal Care' 
      path='/procedures/postnatal'
      description='We will work to make sure that you and your new baby remain as healthy as possible.'/>
      <Box title='Menopause & Beyond' 
      path='/procedures/menopause'
      description='We offer personalized care as your body transitions through the phases of menopause.'/>
    </div>
  );
}
