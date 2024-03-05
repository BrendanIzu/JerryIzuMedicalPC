interface ServiceProps {
  title: string
}

const Service = ({title} : ServiceProps) => {
  return (
    <div className="w-full bg-white shadow rounded-md px-6 py-4">
      <h3>{title}</h3>
    </div>
  )
}

interface ServicesProps {
  title: string
  services: string[]
}

export const Services = ({title, services} : ServicesProps) => {
  return (
    <div className="m-16">
      <h1>{title}</h1>
      <br/>
      <div className="flex flex-wrap gap-5">
        {services.map(service => <div key={service.toString()}><Service title={service}/></div>)}
      </div>
    </div>
  )
}