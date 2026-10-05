import Link from "next/link";

interface Props {
  title: string
  description: string
  path: string
}

const Box = ({title, description, path} : Props) => {
  return (
    <Link href={path} className='group flex flex-col rounded-xl bg-purple p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md'>
      <h3 className='text-pink' style={{fontSize: '19px'}}>{title}</h3>
      <p className='mt-3 flex-1'>{description}</p>
      <span className='mt-5 font-medium text-[#1f1a21] group-hover:text-pink'>Learn more →</span>
    </Link>
  )
}

export default function Offerings() {
  return (
    <div className='page-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
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
