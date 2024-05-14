/* eslint-disable no-unused-vars */
import React,{ Component } from "react";
export default class MainContent extends Component
{
  state={pageTitle:"Customers:",
  customersCount:5,
  customers:[
    {
      id:1,
      name:"Varshith",
      phone:"9032418485",
      address:{city:"Hyderabad"}
    },
    {
      id:2,
      name:"Manideep",
      phone:"9392782913",
      address:{city:"London"}
    },
    {
      id:3,
      name:"Srivarsha",
      phone:"9884251219",
      address:{city:"Bangalore"}
    },
    {
      id:4,
      name:"Srikar",
      phone:"8309348771",
      address:{city:"New Delhi"}
    },
    {
      id:5,
      name:"Charan",
      phone:"9553782131",
      address:{city:"New York"}
    },
  ],
};

   render()
   {
    return(
    <div>
      <h4 className="border-bottom m-1 p-1">
        {this.state.pageTitle}

       <span className="m-2">
        {this.state.customersCount}
       </span>

       <button className="btn btn-info" 
       onClick={this.onRefreshClick}>
        Refresh
       </button>
      </h4>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.customers.map((cust)=>{
             return (
             <tr key={cust.id}>
             <td>{cust.id}</td>
             <td>{cust.name}</td>
             <td>{cust.phone}</td>
             <td>{cust.address.city}</td>
           </tr>
             );
            })
          }

        </tbody>

      </table>
    </div>
    );
   }
  //Executes when the user clicks on Refresh button
   onRefreshClick=()=>{
      this.setState({
        customersCount:7,
      })
   }
}