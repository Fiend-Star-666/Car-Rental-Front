import React, { Component } from 'react'
import VehicleService from '../services/VehicleService';

class ViewVehicleLogComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicleLogs: []

        }

    }

    componentDidMount(){
        VehicleService.getVehicleLogByVehicleId(this.state.id).then( (res) => 
        {    
            this.setState({vehicleLogs: res.data});
        });
    }
    

    render() {
        return (
        <div>
            <h2 className="text-center"> Vehicle Logs of a VehicleId</h2>  

            <div className = "row" >
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Vehicle Log Id</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Creation Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {       
                            this.state.vehicleLogs.map(
                                vehicleLog =>
                                <tr key = {vehicleLog.id}>
                                    <td>    {vehicleLog.id}                               </td>
                                    <td>    {vehicleLog.type}                             </td>
                                    <td>    {vehicleLog.description}                      </td>
                                    <td>    {vehicleLog.creationDate.substring(0,16)}     </td>
                                    
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

export default ViewVehicleLogComponent
