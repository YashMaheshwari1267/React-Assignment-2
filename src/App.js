import React from 'react';
import './App.css';
import './Employee/Employee.css';
import Employee from './Employee/Employee';

function App(){
  const state = {
    employees: [
      {id: '1', name : 'Charlie',job : 'Janitor'},
      {id: '2', name : 'Mac', job: 'Bouncer'},
      {id: '3', name : "Dee", job: 'Aspiring actress'},
      {id: '4', name : "Dennis", job: 'Bartender'}
    ]
  }

  let employee = (
      state.employees.map(emp => {
        return <Employee 
          name={emp.name}
          job={emp.job}
        />
      })
  );

  const name = "Name";
  const job = "Job";
  return (
    <div className="App">
        <table>
          <tr>
              <th>{name}</th>
              <th>{job}</th>
          </tr>
          {employee}
        </table>
    </div>
  );
}

export default App;
