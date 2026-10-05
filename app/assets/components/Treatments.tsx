interface TreatmentProps {
  title: string
  paragraphs: string[]
}

const Treatment = ({title, paragraphs} : TreatmentProps) => {
  return (
    <div className="rounded-xl bg-white p-7 shadow-sm ring-1 ring-black/5 md:p-9">
      <h3 className='text-pink' style={{fontSize: '20px'}}>{title}</h3>
      {paragraphs.map(paragraph => (
        <p key={paragraph} className="mt-4">{paragraph}</p>
      ))}
    </div>
  )
}

export default function Treatments() {
  return (
    <section className="page-x py-12 md:py-16">
      <h1>Featured Treatments</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Treatment title='EMSCULPT NEO®' paragraphs={[
          'EMSCULPT NEO® is the only noninvasive treatment that combines HIFEM® technology for muscle building and strengthening with synchronized RF heating to target and eliminate stubborn fat.',
          'Whether your goal is to enhance overall wellness by strengthening, firming, toning, body shaping, and muscle re-education, or finding relief from different types of pain, this 30-minute procedure helps you achieve results with no downtime.',
        ]}/>
        <Treatment title='EMSELLA' paragraphs={[
          'This revolutionary procedure utilizes HIFEM® technology to provide entirely noninvasive electromagnetic stimulation of pelvic floor musculature for the purpose of rehabilitation of weak pelvic muscles and restoration of neuromuscular control for the treatment of male and female urinary incontinence.',
        ]}/>
      </div>
    </section>
  )
}
