import React, { Component } from 'react';
import VehicleService from '../services/VehicleService';
import "react-datepicker/dist/react-datepicker.css";  
import DatePicker from "react-datepicker";  
import { render } from '@testing-library/react';
import Dropdown from 'react-dropdown';


class CreateVehicleLogComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            // todo and create an api to use this
           // vehicleid: this.props.match.params.id,
           id:'',
           type:'',
           description:'',
           creationDate: new Date()

        }

          this.changeType=this.changeTypeHandler.bind(this);

          this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
          this.changeCreationDateHandler = this.changeCreationDateHandler.bind(this);
          
    }

    componentDidMount(){
        /*
        VehicleService.getVehicleLog().then((res) =>
        {   
            res.data.forEach(element => {
                this.state.selectedVehicleLog.push(element.name);
            })       
        })

    }

    vehicleLog = (e) => {

        e.preventDefault();
        let vehicleLog = {id: this.state.id, type: this.state.type, description: this.state.description, 
                       creationDate: this.state.creationDate};
        console.log('vehicleLog=> ' + JSON.stringify(vehicleLog));

        /*Navigate List page of the */
        
        
    }

    
   
    changeTypeHandler = (event) =>{
        this.setState({type: event.target.value})
    }

     
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeCreationDateHandler = (event) =>{
        this.setState({creationDate:event.target.value})
    }
    
    

    cancel() {
        this.props.history.push('/vehicle/add');
    }

    render() {
    

        return (
            <div>
                <br></br>
                   <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">  Vehicle Log </h3>
                                <div className = "card-body"  >
                                    <form>                      

                                    <div>
                        					<label>Vehicle Log Type:</label>
					                        <select placeholder="Vehicle Log Type" value={this.state.type} onChange={this.changeTypeHandler}>
						                        <option>--Choose Vehicle Log Type--</option>
		                                            <option value='Accident'>{'Accident'}</option>,
                                                    <option value='Fueling'>{'Fueling'}</option>,
                                                    <option value='Cleaning Service'>{'cleaning Service'}</option>,
                                                    <option value='Oil Chanege'>{'Oil Change'}</option>,
                                                    <option value='Repair'>{'Repair'}</option>,
                                                    <option value='Other'>{'Other'}</option>
					                        </select>
				                        </div>

                                        <div className = "form-group">
                                            <label > Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                 value={this.state.description} onChange={this.changeDescriptionHandler} />
                                        </div>

                                        <div className="form-group">  
                                            <DatePicker  
                                                selected={ this.state.creationDate }  
                                                onChange={ this.changeCreationDateHandler }  
                                                name="startDate"  
                                                dateFormat="dd/MM/yyyy"  
                                            />  
                                        </div>
                                        
                                            <button className="btn btn-success" onClick={this.vehicleLog}>view vehicle log</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
            </div>
        );
    }
}


export default CreateVehicleLogComponent;


/*
                                        <div className = "form-group">
                                            <label > Parking Stall: </label>
                                            <input placeholder="Parking Stall" name="parkingstall" className="form-control" 
                                                 value={this.state.parkingstall} onChange={this.changeParkingStallHandler} />
                                        </div>

*/