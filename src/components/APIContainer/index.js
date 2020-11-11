import React, {Component} from 'react';
import API from '../../utils/API';
import EmployeeTable from "../Employee-Table";
import Search from "../Search";

class APIContainer extends Component {

  state = {
    employees: [],
    search: ""
  }


  apiCall = () => {
    API.search()
        .then(res => {
          this.originalEmployees = res.data.results;
          this.setState({employees: res.data.results});

        })
        .catch(err => console.log(err));
  };

  componentDidMount() {
    this.apiCall();
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const employeesCopy = this.originalEmployees.filter(x => `${x.name.first} ${x.name.last}`.toLowerCase().includes(value.toLowerCase()))
    this.setState({employees: employeesCopy, search:value});
  };

  handleOnClick = () => {
    const employeesCopy = [...this.originalEmployees].sort((a, b) => a.name.first.localeCompare(b.name.first));
    this.setState({employees: employeesCopy})
  }


  render() {
    return (
        <div>
          <Search value={this.state.search} handleInputChange={this.handleInputChange}/>
          <EmployeeTable employees={this.state.employees} handleOnClick={this.handleOnClick}/>
        </div>
    )
  }


}

export default APIContainer;