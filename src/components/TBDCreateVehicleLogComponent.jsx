import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import VehicleService from '../services/VehicleService';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];

const defaultOption = options[0];

//<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;

class CreateVehicleComponent extends Component {

    constructor(props){
        super(props)

        this.state = {

           // id: this.props.match.params.id,
           id: '',
           type: options,
           description: '',
           creationDate: ''
           
        }

          this.changeIDHandler=this.changeIDHandler.bind(this);
          this.changeTypeHandler = this.changeTypeHandler.bind(this);
          this.changeDescriptionHandler = this.changeDescriptionHandler(this);
          this.changeCreationDateHandler = this.changeCreationDateHandler(this);
    
          this.saveVehicle = this.saveVehicle.bind(this); 
    }
/*
    saveVehicle = (e) => {

        e.preventDefault();
        let vehicle = {numberPlate: this.state.numberPlate, stockNumber: this.state.stockNumber, passengerCapacity: this.state.passengerCapacity, 
                       barcode: this.state.barcode, hasSunroof: this.state.hasSunroof, status: this.state.status, model: this.state.model, make: this.state.make, 
                       manufacturingYear: this.state.manufacturingYear, mileage: this.state.mileage, carRentalLocation: this.state.carRentalLocation, vehicle_log: this.state.vehicle_log, 
                       vehiclereservation: this.state.vehiclereservation, parkingstall: this.state.parkingstall, type: this.state.type};
        console.log('vehicle=> ' + JSON.stringify(vehicle));

        /*Navigate List page of the *-/
        VehicleService.createVehicle(vehicle).then( res => {
                this.props.history.push('/vehicle/add');
        });

    }
   
    /*
    changeDTypeHandler = (event) => {
        this.setState({dtype: event.target.value});
    }
    *-/
     
    changeNumberPlateHandler = (event) => {
        this.setState({numberPlate: event.target.value});
    }

    changeStockNumberHandler = (event) =>{
        this.setState({stockNumber:event.target.value})
    }
    
    changePassengerCapacityHandler = (event) =>{
        this.setState({passengerCapacity:event.target.value})
    }
    
    changeMileageHandler = (event) => {
        this.setState({mileage: event.target.value});
    }
   
    changeManufacturingYearHandler = (event) => {
        this.setState({manufacturingYear: event.target.value});
    }
    
    changeMakeHandler = (event) => {
        this.setState({make: event.target.value});
    }
    
    changeModelHandler = (event) => {
        this.setState({model: event.target.value});
    }
    
    changeStatusHandler = (event) => {
        this.setState({status: event.target.value});
    }
    
    changeHasSunroofHandler = (event) => {
        this.setState({hasSunroof: event.target.value});
    }
    
    changeBarcodeHandler = (event) => {
        this.setState({barcode: event.target.value});
    }

    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    changeCarRentalLocationHandler = (event) => {
        this.setState({carRentalLocation: event.target.value});
    }

    changeVehicleLogHandler = (event) => {
        this.setState({vehicle_log: event.target.value});
    }


    changeVehicleReservationHandler = (event) => {
        this.setState({vehiclereservation: event.target.value});
    }


    changeParkingStallHandler = (event) => {
        this.setState({parkingstall: event.target.value});
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
                                <h3 className="text-center">  Add Vehicle </h3>
                                <div className = "card-body"  >
                                    <form>                      
                                       
                                        <div className = "form-group">
                                            <label > Number Plate: </label>
                                            <input placeholder="Number Plate" name="numberPlate" className="form-control" 
                                                 value={this.state.numberPlate} onChange={this.changeNumberPlateHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Stock Number: </label>
                                            <input placeholder="Stock Number" name="stockNumber" className="form-control" 
                                                 value={this.state.stockNumber} onChange={this.changeStockNumberHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Passenger capacity: </label>
                                            <input placeholder="Passenger Capacity" name="passengerCapacity" className="form-control" 
                                                 value={this.state.passengerCapacity} onChange={this.changePassengerCapacityHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > HasSunroof: </label>
                                            <input placeholder="HasSunroof" name="hasSunroof" className="form-control" 
                                                 value={this.state.hasSunroof} onChange={this.changeHasSunroofHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Model: </label>
                                            <input placeholder="Model" name="model" className="form-control" 
                                                 value={this.state.model} onChange={this.changeModelHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Make: </label>
                                            <input placeholder="Make" name="make" className="form-control" 
                                                 value={this.state.make} onChange={this.changeMakeHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Manufacturing Year: </label>
                                            <input placeholder="Manufacturing Year" name="manufacturingYear" className="form-control" 
                                                 value={this.state.manufacturingYear} onChange={this.changeManufacturingYearHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Mileage: </label>
                                            <input placeholder="Mileage" name="mileage" className="form-control" 
                                                 value={this.state.mileage} onChange={this.changeMileageHandler} />
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label > Barcode: </label>
                                            <input placeholder="Barcode" name="barcode" className="form-control" 
                                                 value={this.state.barcode} onChange={this.changeBarcodeHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                 value={this.state.status} onChange={this.changeStatusHandler} />
                                        </div>


                                        <div className = "form-group">
                                            <label > Type: </label>
                                            <input placeholder="Type" name="type" className="form-control" 
                                                 value={this.state.type} onChange={this.changeTypeHandler} />
                                        </div>
                                        






                                            <button className="btn btn-success" onClick={this.saveVehicle}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
            </div>
        );
    }
    */
}

export default CreateVehicleComponent;
