import Link from "next/link";
import Image from "next/image";
import Bar from "./Bar";

interface Props {
  title: string
  subtitle: string
  image: string
  position: 'title' | 'section' | 'reversed'
}

export default function Section({ title, subtitle, image, position } : Props) {
  return (
    <> 
    { position == 'title' &&   
      <div className="mx-16 my-8">
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-152">
            <br/>
            <br/>
            <h1>{title}</h1>
            <br/>
            <h2>{subtitle}</h2>
            <br/>
            {/* <Link className="text-pink hover:text-dark-purple" href='/procedures'>View All Services</Link> */}
            <br/>
            <br/>
          </div>
          <div className="w-152">
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src={image} height={500} width={500} alt=""/>
          </div>
        </div>
      </div>}
    
      { position == 'section' && 
      <div className="mx-16 my-8">
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-152">
            <Image style={{borderRadius: '10px 50px 10px 50px'}} src={image} height={500} width={500} alt=""/>
          </div>
          <br/>
          <br/>
          <div className="w-152">
            <Bar/>
            <br/>
            <h1>{title}</h1>
            <br/>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>}
      
      { position == 'reversed' &&   
      <div className="mx-16 my-8">
        <div className="flex justify-between items-center flex-wrap">
          <div className="w-152">
            <br/>
            <br/>
            <h1>{title}</h1>
            <br/>
            <p className="pr-12">{subtitle}</p>
            <br/>
            <br/>
            <br/>
          </div>
          <div className="w-152">
            <Image style={{borderRadius: '50px 10px 50px 10px'}} src={image} height={500} width={500} alt=""/>
          </div>
        </div>
      </div>}
    </>
  );
}
