'use client';

import Link from "next/link";
import { useWindowSize } from "usehooks-ts";

import styles from '../styles/Offerings.module.css';

interface Props {
  title: string
  description: string
  path: string
}

const Box = ({title, description, path} : Props) => {
  const { width = 0, height = 0 } = useWindowSize();
  return (
    <div className={styles.box} style={width > 1000 ? 
      {height: 'auto', width: '280px', backgroundColor: '#faf8fb', margin: '10px', borderRadius: '10px', padding: '40px'}
      :
      {height: '250px', width: '80%', backgroundColor: '#faf8fb', marginBottom: '20px', borderRadius: '10px', padding: '40px'}}>
      <h3 style={{fontSize: '20px', color: '#db79d4'}}>{title}</h3>
      <br/>
      <p>{description}</p>
      <br/>
      <Link className={styles.link} href={path}>Learn more</Link>
    </div>
  )
}

export default function Offerings() {
  const { width = 0, height = 0 } = useWindowSize();
  return (
    <div style={width > 1000 ? {display: 'flex', justifyContent: 'center'} : {display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
