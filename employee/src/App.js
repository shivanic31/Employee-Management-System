import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      employee:[
        {id:101,name:"Shivani",age:26,city:'Indore',salary:15000},
        {id:102,name:"Saloni",age:26,city:'Ujjain',salary:18000},
        {id:103,name:"Jay",age:26,city:'Indore',salary:20000},
        {id:104,name:"Amit",age:26,city:'Devas',salary:12000},
        {id:105,name:"Sonam",age:26,city:'Ratlam',salary:21000},
      ]
    }
  }
  add=()=>{
    var ob={
      id:this.idbox.value,
      name:this.namebox.value,
      age:this.agebox.value,
      city:this.citybox.value,
      salary:this.salarybox.value
    }
    this.setState({employee:[...this.state.employee,ob]})
    this.clearbox()
  }
  clearbox=()=>{
    this.idbox.value=''
    this.namebox.value=''
    this.agebox.value=''
    this.citybox.value=''
    this.salarybox.value=''

  }
  delete=(id)=>{
   this.setState({employee:this.state.employee.filter(emp=>emp.id!==id)})
  }
  render() {
    return (
      <div  className='Contain'>
        <h1>EMPLOYEE MANAGMENT</h1>
       
      <hr></hr>
        <input ref={c=>this.idbox=c} placeholder='Enter the id'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input ref={c=>this.namebox=c} placeholder='Enter the name'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input ref={c=>this.agebox=c} placeholder='Enter the age'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input ref={c=>this.citybox=c} placeholder='Enter the city'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input ref={c=>this.salarybox=c} placeholder='Enter the salary'></input><br></br><br></br>
   
         <button className='Sub' onClick={this.add}>Submit</button><hr></hr>
        <table className='Bor' cellPadding='20'Cellspacing='10' align='center'>
          <tr>
            <th>S.no</th>
            <th>ID</th>
            <th>NAME</th>
          <th>AGE</th>
          <th>CITY</th>
          <th>SALARY</th>
          <th>OPERATION</th>
          </tr>
          {this.state.employee.map((emp,index)=>{
            return <tr>
              <td>{index+1}</td>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.city}</td>
              <td>{emp.salary}</td>
              <td><button onClick={()=>this.delete(emp.id)}>Delete</button></td>
              
            </tr>

          })}
        </table>
      </div>
    )
  }
}
