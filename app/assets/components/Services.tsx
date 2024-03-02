interface ServiceProps {
  title: string
}

const Service = ({title} : ServiceProps) => {
  return (
    <div style={{width: 'auto', backgroundColor: '#faf8fb', margin: '10px', padding: '15px', borderRadius: '5px'}}>
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
    <div style={{margin: '100px', marginTop: '70px'}}>
      <h2>{title}</h2>
      <br/>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {services.map(service => <div key={service.toString()}><Service title={service}/></div>)}
      </div>
    </div>
  )
}