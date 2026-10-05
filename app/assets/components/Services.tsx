interface ServicesProps {
  title: string
  services: string[]
}

export const Services = ({title, services} : ServicesProps) => {
  return (
    <section className="page-x py-12 md:py-16">
      <h1>{title}</h1>
      <ul className="mt-8 flex flex-wrap gap-3">
        {services.map(service => (
          <li key={service} className="rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-black/5">
            {service}
          </li>
        ))}
      </ul>
    </section>
  )
}
