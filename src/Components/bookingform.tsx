import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Bookingpost() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id_vehicles = queryParams.get('vehicle');


    const [formData, setFormData] = useState({
        email: '',
        full_name: '',
        country: '',
        id_passport: '',
        phone_number: '',
        airport: '',
        airline: '',
        no_flight: '',
        date_in: '',
        hour_in: '',
        date_out: '',
        hour_out: '',
        id_vehicles: Number(id_vehicles),
    });

    
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    

    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        axios.post('http://localhost:3001/booking/create', formData)
        .then(response => {
            
        console.log(response.data)
        window.alert("The booking was sucesfully create")
        setFormData({
            email: '',
            full_name: '',
            country: '',
            id_passport: '',
            phone_number: '',
            airport: '',
            airline: '',
            no_flight: '',
            date_in: '',
            hour_in: '',
            date_out: '',
            hour_out: '',
            id_vehicles: Number(id_vehicles),
        });
        })
        .catch(error => {
        window.alert("Something goes wrong")
        console.error('Error:', error);
        });

    }

    return (

        
        
        <Form className="m-5" onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3" controlId="email"> 
            <Form.Label>Email address</Form.Label>
            <Form.Control type="string" placeholder="Enter email" onChange={handleOnChange} name='email' value={formData.email} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="full_name">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="string" placeholder="Full Name" onChange={handleOnChange} name='full_name' value={formData.full_name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="string" placeholder="Your Country" onChange={handleOnChange} name='country' value={formData.country} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="id_passport">
            <Form.Label>ID or Passport</Form.Label>
            <Form.Control type="string" placeholder="Identification number or Passport number" onChange={handleOnChange} name='id_passport' value={formData.id_passport} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone_number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="string" placeholder="Phone Number" onChange={handleOnChange} name='phone_number' value={formData.phone_number} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="airport">
            <Form.Label>Airport</Form.Label>
            <Form.Control type="string" placeholder="Name of airport" onChange={handleOnChange} name='airport' value={formData.airport} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="airline">
            <Form.Label>Airline</Form.Label>
            <Form.Control type="string" placeholder="Airline name" onChange={handleOnChange} name='airline' value={formData.airline} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="no_flight">
            <Form.Label>No. Flight</Form.Label>
            <Form.Control type="string" placeholder="Number of flight" onChange={handleOnChange} name='no_flight' value={formData.no_flight} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date_in">
            <Form.Label>Date in</Form.Label>
            <Form.Control type="string" placeholder="Date Arrive" onChange={handleOnChange} name='date_in' value={formData.date_in} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="hour_in">
            <Form.Label>Hour In</Form.Label>
            <Form.Control type="string" placeholder="Hour of arrive" onChange={handleOnChange} name='hour_in' value={formData.hour_in}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="date_out">
            <Form.Label>Date Out</Form.Label>
            <Form.Control type="string" placeholder="Date to take off" onChange={handleOnChange} name='date_out' value={formData.date_out}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="hour_out">
            <Form.Label>Hour Out</Form.Label>
            <Form.Control type="string" placeholder="Hour to take off" onChange={handleOnChange} name='hour_out' value={formData.hour_out} />
        </Form.Group>
        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form>
    );
}

export default Bookingpost;