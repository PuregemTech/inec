const Table = ({name, title}) => {
  const data = [
    {
      id: 1,
      incidentType: 'Destruction of facilities - CL',
      severity: 'Critical',
      address: 'Rumuoparali, Port-Harcourt, Rivers-State, 500211. Nigeria',
      sender: 'Innocent Ekwulo',
      date: 'Oct 21, 2022. 4:11:05',
      status: `${name}`,
    },
    {
      id: 2,
      incidentType: 'Destruction of facilities - CL',
      severity: 'Critical',
      address: 'Rumuoparali, Port-Harcourt, Rivers-State, 500211. Nigeria',
      sender: 'Innocent Ekwulo',
      date: 'Oct 21, 2022. 4:11:05',
      status: `${name}`,
    },
    {
      id: 3,
      incidentType: 'Destruction of facilities - CL',
      severity: 'Critical',
      address: 'Rumuoparali, Port-Harcourt, Rivers-State, 500211. Nigeria',
      sender: 'Innocent Ekwulo',
      date: 'Oct 21, 2022. 4:11:05',
      status: `${name}`,
    },
    {
      id: 4,
      incidentType: 'Destruction of facilities - CL',
      severity: 'Critical',
      address: 'Rumuoparali, Port-Harcourt, Rivers-State, 500211. Nigeria',
      sender: 'Innocent Ekwulo',
      date: 'Oct 21, 2022. 4:11:05',
      status: `${name}`,
    },
    {
      id: 5,
      incidentType: 'Destruction of facilities - CL',
      severity: 'Critical',
      address: 'Rumuoparali, Port-Harcourt, Rivers-State, 500211. Nigeria',
      sender: 'Innocent Ekwulo',
      date: 'Oct 21, 2022. 4:11:05',
      status: `${name}`,
    },
    {
      id: 6,
      incidentType: 'Destruction of facilities - CL',
      severity: 'Critical',
      address: 'Rumuoparali, Port-Harcourt, Rivers-State, 500211. Nigeria',
      sender: 'Innocent Ekwulo',
      date: 'Oct 21, 2022. 4:11:05',
      status: `${name}`,
    },
  ];
  let color = '#e9ecef';
  return (
    <table className="" style={{fontSize: '0.9rem'}}>
      <thead>
        <td>{title}</td>
        <td>Severity</td>
        <td>Address</td>
        <td>Sender</td>
        <td>Date/Time</td>
        <td>Status</td>
      </thead>
      <tbody>
        {data.map ((row, index) => (
          <tr
            key={row.id}
            style={{
              backgroundColor: index % 2 === 1 ? color : '',
            }}
          >
            <td>{row.incidentType}</td>
            <td>{row.severity}</td>
            <td>{row.address}</td>
            <td>{row.sender}</td>
            <td>{row.date}</td>
            <td>
              <div
                className={
                  row.status === 'Unresolved' ? 'unresolved' : 'resolved'
                }
              >
                {row.status}
              </div>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
