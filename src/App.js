import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import CreateVehicleComponent from './components/CreateVehicleComponent';
import ListVehicleComponents from './components/ListVehicleComponents';
import ViewVehicleComponent from './components/ViewVehicleComponent';
import ViewVehicleLogComponent from './components/ViewVehicleLogComponent';
import ViewParkingStallComponent from './components/ViewParkingStallComponent';
import ViewCRLocationForComponent from './components/ViewCRLocationForVehicleComponent';
import ListVehicleOfCRLocationComponents from './components/ListVehicleOfCRlLocationComponents';
import ListCRLocationComponents from './components/ListCRLocationComponents';
import ViewCRSystemComponent from './components/ViewCRSystemComponent';
import ViewAllAccountsViaAdmin from './components/ViewAllAccountsViaAdmin';
import ViewPersonalInfoAccount from './components/ViewPersonalInfoAccount';
import ViewReservationAccount from './components/ViewReservationAccount';
import ListVehicleReservationsAll from './components/ListVehicleReservationsAll';
import ListVehicleReservationPerCRLocation from './components/ListVehicleReservationPerCRLocation';
import CreateAccountMember from './components/CreateAccountMember';
import CreateCRLocation from './components/CreateCRLocation';
import CreateVehicleReservation from './components/CreateVehicleReservation';
import ViewBillComponentVRID from './components/ViewBillComponentsVRID';
import ViewBillItem from './components/ViewBillItem';
import CreateAccountReceptionist from './components/CreateAccountReceptionist';
import Login from './components/Login';
import CreateVehicleLogComponent from './components/CreateVehicleLog';

//hehe
import CreateVR from './components/CreateVR';


function App() {
  return (
    <div>
      <Router>
              <HeaderComponents />
                <div className="container">   
                    <Switch>
                       
                       <Route path="/vehicle/add" component={CreateVehicleComponent}/>
                       <Route path="/vehicle/view" exact component={ListVehicleComponents}/> 
                       <Route path="/vehicle/view/:id" component={ViewVehicleComponent}/>
                       <Route path="/logs/vehicle/view/:id" component={ViewVehicleLogComponent}/>
                       <Route path="/parkingstall/vehicle/view/:id" component={ViewParkingStallComponent}/>
                       <Route path="/carrentallocation/vehicle/view/:id" component={ViewCRLocationForComponent}/>
                       <Route path="/carrentallocation/:id/vehicles" component={ListVehicleOfCRLocationComponents}/>
                       <Route path="/carrentallocations/view" component={ListCRLocationComponents}/>
                       <Route path="/home/system" component={ViewCRSystemComponent}/>
                       <Route path="/admin/account/view/all" component={ViewAllAccountsViaAdmin}/>
                       <Route path="/account/view/pinfo/:id" component={ViewPersonalInfoAccount}/>
                       <Route path="/vehiclereservation/account/view/:id" component={ViewReservationAccount}/>
                       <Route path="/admin/vehiclereservations/view/all" component={ListVehicleReservationsAll}/>
                       <Route path="/admin/vehiclereservation/carrentallocation/view/vehicle/:id" component={ListVehicleReservationPerCRLocation}/>
                       <Route path="/account/register/member" component={CreateAccountMember}/>
                       <Route path="/admin/carrentallocation/add" component={CreateCRLocation}/>
                       <Route path="/createvehiclereservation/:id" component={CreateVehicleReservation}/>
                       <Route path="/vehiclereservation/viewbill/:id" component={ViewBillComponentVRID}/>
                       <Route path="/vehiclereservation/viewbillItem/:id/detailedview/" component={ViewBillItem}/>
                       <Route path="/createVR" component={CreateVR}/>
                       <Route path="/account/register/admin" component={CreateAccountReceptionist}/>
                       <Route path="/login" component={Login}/>
                       <Route path="/vehiclelog" component={CreateVehicleLogComponent}/>
                    </Switch>
                </div>
              <FooterComponents/>
      </Router>


    </div>
   
  );
}

export default App;




//<Route path="/update-employee/:id" component={UpdateEmployeeComponent}/>

/*

        <Router>
              <HeaderComponents />
                <div className="container">   
                    <Switch>
                       
                       <Route path="/vehicle/add" component={CreateVehicleComponent}/>
                       <Route path="/vehicle/view" exact component={ListVehicleComponents}/> 
                       <Route path="/vehicle/view/:id" component={ViewVehicleComponent}/>
                       <Route path="/logs/vehicle/view/:id" component={ViewVehicleLogComponent}/>
                       <Route path="/parkingstall/vehicle/view/:id" component={ViewParkingStallComponent}/>
                       <Route path="/carrentallocation/vehicle/view/:id" component={ViewCRLocationForComponent}/>
                       <Route path="/carrentallocation/:id/vehicles" component={ListVehicleOfCRLocationComponents}/>
                       <Route path="/carrentallocations/view" component={ListCRLocationComponents}/>
                       <Route path="/home/system" component={ViewCRSystemComponent}/>
                       <Route path="/admin/account/view/all" component={ViewAllAccountsViaAdmin}/>
                       <Route path="/account/view/pinfo/:id" component={ViewPersonalInfoAccount}/>
                       <Route path="/vehiclereservation/account/view/:id" component={ViewReservationAccount}/>
                       <Route path="/admin/vehiclereservations/view/all" component={ListVehicleReservationsAll}/>
                       <Route path="/admin/vehiclereservation/carrentallocation/view/vehicle/:id" component={ListVehicleReservationPerCRLocation}/>
                       <Route path="/account/register/member" component={CreateAccountMember}/>
                       <Route path="/admin/carrentallocation/add" component={CreateCRLocation}/>
                       <Route path="/createvehiclereservation/:id" component={CreateVehicleReservation}/>
                       <Route path="/vehiclereservation/viewbill/:id" component={ViewBillComponentVRID}/>
                       <Route path="/vehiclereservation/viewbillItem/:id/detailedview/" component={ViewBillItem}/>
                       <Route path="/createVR" component={CreateVR}/>
                       <Route path="/account/register/admin" component={CreateAccountReceptionist}/>
                       <Route path="/login" component={Login}/>
                    </Switch>
                </div>
              <FooterComponents/>
      </Router>

*/