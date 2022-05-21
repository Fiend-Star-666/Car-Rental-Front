import React, { Component, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import VehicleService from '../services/VehicleService';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import { render } from '@testing-library/react';


let selectedcrlid;
let CRLname=['Choose CRLocation'];
let CRLid=['Choose CRLid'];
let vehicles=[];
let vehicleSet = new Map();
let vehicleName = new Map();
let vehicleId = {};


export default function CreateVehicleReservation(){  
    
    const {accid} = useParams();
    
    const [creationDate, setCreationDate] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date()); 

    const [pickupLocation,setPickupLocation] = useState('');
    const [returnLocation,setReturnLocation] = useState('');
    

    const handleCreationDate = (date) => {
    setCreationDate(date);
    };

    const handleDueDate = (date) => {
    setDueDate(date);
    };

    const handleChangePickupLocation = (event) => { 
         setPickupLocation(event.target.value);
     };

    const handleChangeReturnLocation = (event) =>{
        setReturnLocation(event.target.value);
    };

    const [selectedVehicleName, setSelectedVehicleName]=useState('');

    const handleChangeSelectedVehicleName = (event) =>{
        setSelectedVehicleName(event.target.value);
    };

    useEffect(() => {
        VehicleService.getCRLocation()
            .then((response) =>{
    
                response.data.forEach(element => {
                    CRLname.push(element.name);
                    CRLid.push(element.id);
                    vehicles.push(element.vehicle);
                    vehicleSet.set(element.id,element.vehicle);
                    element.vehicle.forEach(item => {
                        vehicleName.set(element.id,item.model);
                    })
                    
                })
                }
            )
            vehicleSet.set("Choose CRLid",[{}])        
    } , []);


    //const saveVehicleReservation



    const saveVehicleReservation = (e) => {

        e.preventDefault();
        console.log(accid);
        let vehicle = { creationDate: creationDate, dueDate: dueDate, pickupLocation: pickupLocation,returnLocation: returnLocation, vehicle:selectedVehicleName};

        console.log('vehicleReservation=> ' + JSON.stringify(vehicle));
       /* 
        VehicleService.createVehicle(vehicle).then( res => {
                this.props.history.push('/vehicle/add');
        });
        */
}



    
//https://react-hooks-cheatsheet.com/useeffect

var i=0;    //iterator of a for loop


var elementl;
var selectedcar;
if (typeof(vehicleSet.get(CRLid[selectedcrlid])) != "undefined") {

   elementl = vehicleSet.get(CRLid[selectedcrlid]).map(item =>{
         return (<option key={item.barcode} value={item.model}>{item.model}</option>);

    });

    elementl.map((element)=>{
        console.log(element)
    })
    //selectedVehicleName=elementl[0].props.value;
}
else{
    elementl='';
}



    return(
         <div>
            <br></br>
                <div className="container">
                    <div className="row">
 
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Create Reservation for Account id:{accid}</h3>
                            <div className = "card-body">
                                <form>
                                        
                                    <div className = "form-group">
                                        <label>Creation Date:</label>
                                        <DatePicker selected={creationDate} value={creationDate} onChange={handleCreationDate} dateFormat="dd/MM/yyyy"/> 
                                    </div>
                                    <div className = "form-group">
                                        <label>Due Date:</label>
                                        <DatePicker selected={dueDate} value={dueDate} onChange={handleDueDate} dateFormat="dd/MM/yyyy"/> 
                                    </div>
                                    <div className = "form-group">
                                            <label> 
                                                PickUp Location:
                                                    <select value={pickupLocation} onChange={handleChangePickupLocation}>
                                                            {
                                                                CRLname.map((element) => {
                                                                    return (<option key={element.id} value={element}> {element} </option>)
                                                                })
                                                            }
                                                    </select>
                                            </label>
                                    </div>
                                    <div>
                                        {
                                        CRLname.forEach(element => {
                                           if(element==pickupLocation){
                                                selectedcrlid=i;
                                           } 
                                           else{
                                               i++;
                                            }
                                        })
                                        //connect carname to car id
                                    }
                                    
                                    <div>
                                        <label>
                                                Select Vehicle:
                                                    <select value={selectedVehicleName} onChange={handleChangeSelectedVehicleName}> 
                                                        {elementl}
                                                    </select>
                                            </label>
                                        </div>
                                    </div>
                                    <div className = "form-group">
                                            <label> 
                                                Return Location:
                                                <select value={returnLocation} onChange={handleChangeReturnLocation}>
                                                        {
                                                            CRLname.map((element) => {
                                                                    return (<option key={element.id} value={element}> {element} </option>)
                                                                })
                                                        }
                                                </select>
                                            </label>
                                    </div>
                                    <button className="btn btn-success" onClick={saveVehicleReservation}>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
        </div>    
    )


}