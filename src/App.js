import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import OurServices from './Pages/OurServices/OurServices';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import More from './Pages/More/More';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Opinion from './Pages/Opinion/Opinion';
import MyBooking from './Pages/MyOrder/MyBooking';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <PrivateRoute path='/tourplace'>
           <OurServices></OurServices>
         </PrivateRoute>
         <PrivateRoute path='/mybooking'>
            <MyBooking></MyBooking>
         </PrivateRoute>
         <Route path='/aboutus'>
           <AboutUs></AboutUs>
         </Route>
         <Route path='/contactus'>
            <ContactUs></ContactUs>
         </Route>
         <Route path='/more/:id'>
            <More></More>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/opinion'>
          <Opinion></Opinion>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
