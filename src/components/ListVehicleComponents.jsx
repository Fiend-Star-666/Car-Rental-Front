import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';

class ListVehicleComponents extends Component{

    constructor(props){
        super(props) 

        this.state = {
            vehicles: []
        }
        this.addVehicle = this.addVehicle.bind(this);
        //this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);

    }


    addVehicle(){
        this.props.history.push('/vehicle/add');
    }
   
    /*    
     editVehicle(id){
        this.props.history.push(`/vehicle/edit/${id}`)
     }
    */

    deleteVehicle(id){   
        VehicleService.deleteVehicle(id).then( res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id)});
        });
    }

    viewVehicle(id){
        this.props.history.push(`/vehicle/view/${id}`);
    }

    /**
     * ReactJS and SpringBoot integration , and represent data on the browser from DB.
     * HTTP axois.
    */
    
    componentDidMount(){
        VehicleService.getVehicles().then((res) => 
        { 
            this.setState({ vehicles: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Vehicle List with Status</h2>
                <div className= "row">
                    <button className="btn btn-primary" onClick={this.addVehicle}> Add Vehicle </button>
                </div>
                <br></br>

                <div className = "row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>License Plate Number</th>
                                <th>Stock Number</th>
                                <th>Passenger Capacity</th>
                                <th>Sunroof</th>
                                <th>Model</th>
                                <th>Make</th>
                                <th>Manufacturing Year</th>
                                <th>Mileage</th>
                                <th>Barcode</th>
                                <th>Status</th>
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {       
                                this.state.vehicles.map(
                                    vehicle =>
                                    <tr key = {vehicle.id}>
                                        <td>    {vehicle.id}                      </td>
                                        <td>    {vehicle.numberPlate}             </td>
                                        <td>    {vehicle.stockNumber}             </td>
                                        <td>    {vehicle.passengerCapacity}       </td>
                                        <td>    {String(vehicle.hasSunroof)}      </td>
                                        <td>    {vehicle.model}                   </td>
                                        <td>    {vehicle.make}                    </td>
                                        <td>    {vehicle.manufacturingYear}       </td>
                                        <td>    {vehicle.mileage}                 </td>
                                        <td>    {vehicle.barcode}                 </td>
                                        <td>    {vehicle.status}                  </td>
                                        <td>    {vehicle.type}                    </td>
                                        
                                        <td>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVehicle(vehicle.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicle.id)} className="btn btn-info">View </button>
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

export default ListVehicleComponents;
//<button onClick = { () => this.editVehicle(vehicle.id)} className="btn btn-info"> Update</button>
                                


/*
    <th>Car Rental Location</th>
    <th>Vehicle Logs</th>
    <th>Vehicle Reservation</th>
    <th>Parking Stall</th>

        <td>    {vehicle.carRentalLocation}       </td>
        <td>    {vehicle.vehicle_log}             </td>
        <td>    {vehicle.vehiclereservation}      </td>
        <td>    {vehicle.parkingstall}            </td>

*/