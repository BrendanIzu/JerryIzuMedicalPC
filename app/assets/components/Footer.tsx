import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
  return (
    <div style={{padding: '100px', paddingLeft: '20px', width: '100%', background: '#faf8fb', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
      <div>
        <Image src='/foot.png' width={180} height={180} alt=""></Image>
      </div>
      <div>
        <h3>Our Location</h3>
        <p>Smyth Medical Plaza<br/>
          27871 Smyth Drive #102<br/>
          Valencia, CA 91355</p>
          <Link style={{color: '#db79d4', fontSize: '15px'}}
            href='https://www.google.com/maps/place/Valencia+Gynecology+Associates/@34.440085,-118.5702101,17z/data=!4m5!3m4!1s0x0:0xde3eff1f52abe20c!8m2!3d34.439771!4d-118.5678166?shorturl=1'>
            Get Directions
          </Link>
      </div>
      <div>
        <h3>Our Hours</h3>
        <p>Monday through Friday<br/>
          9AM - 5PM
        </p>
      </div>
      <div>
        <div>
          <h3>Phone</h3>
          <p>(661) 259-1781</p>
        </div>
        <div style={{marginTop: '20px'}}>
          <h3>Fax</h3>
          <p>(661) 259-4571</p>
        </div>
      </div>
    </div>
  );
}
