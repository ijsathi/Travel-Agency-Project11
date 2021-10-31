import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {selectedBooking} = useAuth();
    return (
        <div>
            <Header></Header>
            <Nav.Link>
                    <Link style={{color:'white',fontWeight:'bold', textDecoration:'none'}} to='/mybooking'><button>My Order</button>{selectedBooking.length}</Link> 
            </Nav.Link>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;