import React, { Component, useState } from 'react';
import VehicleService from '../services/VehicleService';
import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css";  
import { render } from '@testing-library/react';

/*
const [creationDate, setCreationDate] = useState(new Date());
    
    const handleCreationDate = (date) => {
    setCreationDate(date);
    };

    const [dueDate, setDueDate] = useState(new Date()); 

    const handleDueDate = (date) => {
    setDueDate(date);
    };

    const [pickupLocation,setPickupLocation] = useState('Bangalore A');
    
    const handleChangePickupLocation = (location) => { 
        setPickupLocation(location);
    };

    const[returnLocation,setReturnLocation] = useState('Bangalore B');

    const handleReturnLocation = (location) =>{
        setReturnLocation(location);
    };

*/
class CreateVR extends Component{

    constructor(props) {
		super(props);
		this.state = {
			countries : [],
			states : [],
			cities : [],
			selectedCountry : '--Choose Country--',
			selectedState : '--Choose State--',
            name: []
		};
		this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
	}
  
	componentDidMount() {
        VehicleService.getCRLocation().then((res) =>
        {   
            res.data.forEach(element => {
                this.state.name.push(element.name);
            })       
        
        
        this.setState(
            {     
			countries : [/*
				{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
				{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
				{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
				{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
				{ name: 'India', states: [ {name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
			*/]
            
		})});
    
	}
    changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
		this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
	}
	
	render() {
		return (
			<div id="container">
				<h2>Cascading or Dependent Dropdown using React</h2>
	
				<div>
					<label>Country</label>
					<select placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
						<option>--Choose Country--</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State</label>
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
				<div>
					<label>City</label>
					<select placeholder="City">
						<option>--Choose City--</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default CreateVR;






/*


    //id: this.props.match.params.id; //vehicle id
    //accid:this.props.match.params.accid  //ek global id for accouunt id use state if possible
    
    
render(){
    return(
         <div>
            <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Create Reservation :</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label > Reservation Number: </label>
                                            <input placeholder="reservation Number" name="reservation" className="form-control"/>
                                    </div>
                                        
                                    <div className = "form-group">
                                        <label>Creation Date:</label>
                                        <DatePicker selected={creationDate} value={creationDate} onChange={handleCreationDate} /> 
                                    </div>
                                    <div className = "form-group">
                                        <label>Due Date:</label>
                                        <DatePicker selected={dueDate} value={dueDate} onchange={handleDueDate}/> 
                                    </div>
                                    <div className = "form-group">
                                            <label> 
                                                PickUp Location:
                                                <select value={pickupLocation} onChange={handleChangePickupLocation}>
                                                    <option value="BA">Bangalore A</option>
                                                    <option value="BB">Bangalore B</option>
                                                    <option value="BC">Bangalore C</option>
                                                </select>
                                            </label>
                                    </div>
                                    <div className = "form-group">
                                            <label> 
                                                Return Location:
                                                <select value={returnLocation} onChange={handleReturnLocation}>
                                                    <option value="BA">Bangalore A</option>
                                                    <option value="BB">Bangalore B</option>
                                                    <option value="BC">Bangalore C</option>
                                                </select>
                                            </label>
                                        
                                    </div>
                                    
                                        
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
        

}
export default createVR;
//value={s} onChange={s}

// <div className = "form-group">
                                        
//                                     </div>
//                                     <div className = "form-group">
                                        
//                                     </div>
//                                     <div className = "form-group">

//creation date //due date ki range
//return date khaali

                                        // <label > PickUp Location: </label>
                                        //     <input placeholder="PickUp Location" name="PickUp" className="form-control" 
                                        //           />


// <label > Return Location: </label>
//                                             <input placeholder="Return Location" name="Return" className="form-control" />




// class CreateVehicleReservation extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//            // reservationNumber: '', //TBD backend
//             creationDate: '',
//             RSstatus: '',
//             dueDate: '',
//             returnDate: '',
//             pickupLocationName: '',
//             returnLocationName: '',
//             account: {
//                 person:{
//                     email: ''
//                 }
//             }
           
//         }

//         this.changeNameHandler = this.changeNameHandler.bind(this);
        
//         this.changeAddressHandler = this.changeAddressHandler.bind(this);

//         this.saveVehicleReservation = this.saveVehicleReservation.bind(this);
//     }
//      saveVehicleReservation = (e) => {
//         e.preventDefault();
//         //TODO
//  /*       let vehicleReservation = {id: this.state.id, streetAddress: this.state.reservationNumber, this.state.creationDate, this.state.dueDate, this.state.returnDate, this.state.pickupLocationName, this.state.returnLocationName,   
//                           zipcode: this.state.address.zipcode, city: this.state.address.city, state: this.state.address.state, country: this.state.address.country, 
//                         };
//    */        
//         //               console.log('vehicleReservation=> ' + JSON.stringify(vehicleReservation));

                       
//                        // VehicleService.createCRLocation(crLocation).then( res => {
//                // this.props.history.push('/admin/carrentallocation/add');
//                 //  });
//             }
// }
// export default CreateVehicleReservation;
 