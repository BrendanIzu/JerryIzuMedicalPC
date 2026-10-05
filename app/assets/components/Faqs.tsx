import { Faq } from "@/app/interfaces/Faq";

interface FaqsProps {
  faqs: Faq[]
}

export default function Faqs({faqs}: FaqsProps) {
  return (
    <section className="page-x py-12 md:py-16">
      <h1>Frequently Asked Questions</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {faqs.map(faq => (
          <div key={faq.question} className="rounded-xl bg-purple p-7 md:p-8">
            <h3>{faq.question}</h3>
            <p className="mt-3">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
