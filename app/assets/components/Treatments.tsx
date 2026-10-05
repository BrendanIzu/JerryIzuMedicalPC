interface TreatmentProps {
  title: string
  paragraphs: string[]
}

const Treatment = ({title, paragraphs} : TreatmentProps) => {
  return (
    <div className="flex-1 min-w-72 bg-white shadow rounded-md p-10">
      <h3 style={{fontSize: '20px', color: '#db79d4'}}>{title}</h3>
      {paragraphs.map(paragraph => (
        <div key={paragraph}>
          <br/>
          <p>{paragraph}</p>
        </div>
      ))}
    </div>
  )
}

export default function Treatments() {
  return (
    <div className="m-16">
      <h1>Featured Treatments</h1>
      <br/>
      <div className="flex flex-wrap gap-5">
        <Treatment title='EMSCULPT NEO®' paragraphs={[
          'EMSCULPT NEO® is the only noninvasive treatment that combines HIFEM® technology for muscle building and strengthening with synchronized RF heating to target and eliminate stubborn fat.',
          'Whether your goal is to enhance overall wellness by strengthening, firming, toning, body shaping, and muscle re-education, or finding relief from different types of pain, this 30-minute procedure helps you achieve results with no downtime.',
        ]}/>
        <Treatment title='EMSELLA' paragraphs={[
          'This revolutionary procedure utilizes HIFEM® technology to provide entirely noninvasive electromagnetic stimulation of pelvic floor musculature for the purpose of rehabilitation of weak pelvic muscles and restoration of neuromuscular control for the treatment of male and female urinary incontinence.',
        ]}/>
      </div>
    </div>
  )
}
