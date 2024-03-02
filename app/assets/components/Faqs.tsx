import { Faq } from "@/app/interfaces/Faq";

interface FaqProp {
  faq: Faq
}

const Faq = ({faq}: FaqProp) => {
  return (
    <div style={{width: '100%', margin: '10px', padding: '50px', backgroundColor: '#f9f4fc', borderRadius: '10px'}}>
      <h3>{faq.question}</h3>
      <br/>
      <p style={{fontStyle: 'italic'}}>{faq.answer}</p>
    </div>
  )
}

interface FaqsProps {
  faqs: Faq[]
}

export default function Faqs({faqs}: FaqsProps) {
  return (
    <div style={{marginLeft: '100px', marginRight: '100px'}}>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {faqs.map(faq => (<div key={faq.toString()}><Faq faq={faq}/></div>))}
    </div>
    </div>
  );
}
