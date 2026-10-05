interface Stage {
  name: string
  timing: string
}

const colors = ['#f5a9de', '#ef9ad6', '#e897e1'];

// Pink "progress arrow" showing stages in order. Stacks vertically on phones.
export default function Stages({stages} : {stages: Stage[]}) {
  return (
    <div className="info">
      <h2>Stages of Pregnancy</h2>
      <div className="mt-5 flex flex-col sm:flex-row sm:items-stretch">
        {stages.map((stage, i) => (
          <div key={stage.name} className="flex-1 px-4 py-3" style={{backgroundColor: colors[i % colors.length]}}>
            <h4 style={{color: 'white'}}>{stage.name}</h4>
            <p style={{fontSize: '13px', color: 'white'}}>{stage.timing}</p>
          </div>
        ))}
        <div className="arrow-right hidden sm:block"></div>
      </div>
    </div>
  );
}
