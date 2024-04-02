import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function GetBook (){
    interface Booking {
        id: number;
        full_name: string;
        email: string;
        country: number;
        phone_number: string;
        date_in: number;
        date_out: string;
        airport: string;
        airline: string;
        hourin: string;
        hourout: string;
        no_flight: string;
        id_vehicles: number;  
    }

    interface Vehicles {
        brand: string;
        model: string;
        year: number;
        price: number;
        image: string;
    
    }

    const [id_passport, setIdPassport] = useState('');
    const [booking, setBooking] = useState<Booking | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [vehicles, setVehicles] = useState<Vehicles | null>(null);

    const handleIdPassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdPassport(e.target.value);
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const response = await axios.get(`http://localhost:3001/booking/consult/${id_passport}`);
            setBooking(response.data);
            setErrorMessage('');
            setVehicles(response.data.vehicles);
        } catch (error) {
            setBooking(null);
            setVehicles(null);
            setErrorMessage('No se pudo encontrar la reserva.');
        }
    };
    

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Consulta de Reserva</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="id_passport">
                            <Form.Label>ID o Pasaporte:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el ID o Pasaporte"
                                value={id_passport}
                                onChange={handleIdPassportChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Consultar Reserva
                        </Button>
                    </Form>
                    {errorMessage && <p>{errorMessage}</p>}
                </Col>
            </Row>
            {booking && (
                <>
                <Form.Group className="mb-3" controlId="full_name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={booking.full_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={booking.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" value={booking.country} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={booking.phone_number} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="date_in">
                    <Form.Label>Date In</Form.Label>
                    <Form.Control type="text" value={booking.date_in} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="hourin">
                    <Form.Label>Hour In</Form.Label>
                    <Form.Control type="text" value={booking.hourin} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="date_out">
                    <Form.Label>Date Out</Form.Label>
                    <Form.Control type="text" value={booking.date_out} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="hourout">
                    <Form.Label>Hour Out</Form.Label>
                    <Form.Control type="text" value={booking.hourout} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="airport">
                    <Form.Label>Airport</Form.Label>
                    <Form.Control type="text" value={booking.airport} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="airline">
                    <Form.Label>Airline</Form.Label>
                    <Form.Control type="text" value={booking.airline} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="no_flight">
                    <Form.Label>Number Of Flight</Form.Label>
                    <Form.Control type="text" value={booking.no_flight} />
                </Form.Group>

                <img src={vehicles?.image} alt="Booked car" style={{ width: '100%' }} />
                <p>Vehicle:{vehicles?.brand}{vehicles?.model}{vehicles?.year}</p>
                <p>Price:{vehicles?.price} per day</p>
                </>

                
            )}
        </Container>
    );
}

export default GetBook;
