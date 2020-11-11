import React from "react";
import "./style.css";

function EmployeeTable(props) {
  return (
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col"> Photo</th>
            <th scope="col" onClick={props.handleOnClick}> Name</th>
            <th scope="col"> Email</th>
            <th scope="col"> Phone Number</th>
          </tr>
          </thead>
          <tbody>
          {props.employees.map(item => (
              <tr key={item.id.value}>
                <td><img alt={`${item.name.first} ${item.name.last}`} src={item.picture.thumbnail}/></td>
                <td>{item.name.first} {item.name.last}</td>
                <td>{item.email}</td>
                <td>{item.cell}</td>
              </tr>
          ))}

          </tbody>
        </table>

      </div>
  )
}

export default EmployeeTable;