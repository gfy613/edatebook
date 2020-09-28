import React from 'react';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import AddressBook from './pages/AddressBook';
import Datepicker from './components/Datepicker';
import SignUp from './pages/SignUp';
import BigCalendar from './pages/BigCalendar';
import EventList from './pages/EventList';
import EventListComp from './components/EventListComp';
// import header_bkgd2 from './components/Header/assets';
import AddContact from './pages/AddContact';
import AddAddressGroup from './pages/AddAddressGroup';
import  PrivateRoute  from "./components/PrivateRoute"
import  HomePage  from "./components/HomePage"
import  Login  from "./components/Login"


// export default class App extends component {
//   constructor(props)

// }

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route path='/' exact component={HomePage} />
        <Route path='/login' exact component={Login} />

        <Route path='/signup' exact component={SignUp} />
        <Route path='/Profile' exact component={Profile} />
        {/* <PrivatePrivateRoute path="/onlyAuthorizedAllowedHere/" component={Home} /> */}
        <Route path='/Calendar' exact component={BigCalendar} />
        {/* <PrivatePrivateRoute path="/onlyAuthorizedAllowedHere/" component={Home} /> */}
        <Route path='/AddressBook' exact component={AddressBook} />
       <Route path='/AddContact' exact component={AddContact} />
       <Route path='/AddAddressGroup' exact component={AddAddressGroup} />


    </div>

    </Router>

  )
}

export default App;
