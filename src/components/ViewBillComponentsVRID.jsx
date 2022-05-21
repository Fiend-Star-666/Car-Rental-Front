import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
class ViewBillComponentVRID extends Component{
    constructor(props){
        super(props) 
        this.state = {
            id: this.props.match.params.id, //vehicleReservation id
            Bill: []
        }
    }

    
    componentDidMount(){
        VehicleService.viewBillViaVReservation(this.state.id).then((res) => 
        { 
            this.setState({ Bill: res.data});
        });
    }

    viewDetailedView(id){
        this.props.history.push(`/vehiclereservation/viewbillItem/${id}/detailedview`);
    }

/*
id
click here to view all the detailed components
Total Amount
*/
render() {
        return (
            <div>   
                <h2 className="text-center"> Bill of Vehicle Reservation:{this.state.id}  </h2>
                <div className= "row">
                
                </div>
                <br></br>

                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                               
                                <th>ID</th>
                                
                                <th>total Amount</th>
                                <th>Detailed View</th>



                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.Bill.map(
                                    billl =>
                                    <tr key = {billl.id}>
                                       
                                        <td>    {billl.id}       </td>
                                        <td>    {billl.totalAmount} </td>
                        
                                    
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewDetailedView(this.state.id)} className="btn btn-info">View </button>                                   
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

export default ViewBillComponentVRID;



//                                   <button style={{marginLeft: "10px"}} onClick={ () => this.viewPersonalInfo(Account.id)} className="btn btn-info">Personal Profile</button>
     