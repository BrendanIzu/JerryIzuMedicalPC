import Image from "next/image";
import Bar from "./Bar";

interface Props {
  title: string
  subtitle: string
  image: string
  position: 'title' | 'section' | 'reversed'
}

// Two-column text + image block. 'title' is the page hero, 'section' puts the
// image on the left, 'reversed' puts it on the right.
export default function Section({ title, subtitle, image, position } : Props) {
  const imageFirst = position == 'section';
  const radius = imageFirst ? '10px 50px 10px 50px' : '50px 10px 50px 10px';

  return (
    <section className={`page-x ${position == 'title' ? 'py-8 md:py-12' : 'py-12 md:py-16'}`}>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className={imageFirst ? 'md:order-2' : ''}>
          {position == 'section' && <div className="mb-6"><Bar/></div>}
          <h1>{title}</h1>
          <div className="mt-5">
            {position == 'title' ? <h2>{subtitle}</h2> : <p>{subtitle}</p>}
          </div>
        </div>
        <div className={imageFirst ? 'md:order-1' : ''}>
          <Image
            className="h-auto w-full max-w-lg"
            style={{borderRadius: radius}}
            src={image}
            height={500}
            width={500}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
