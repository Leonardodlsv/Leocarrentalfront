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
        hour_in: string;
        hour_out: string;
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
    const [errorMessage, setErrorMessage] = useState('');
    const [vehicles, setVehicles] = useState<Vehicles | null>(null);

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
        id_vehicles: Number(vehicles),
    });
    


    

    const handleIdPassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdPassport(e.target.value);
    };

    const handleIdpassportUpdateChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
        setIdPassport(e.target.value);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
            const response = await axios.get(`http://localhost:3001/booking/consult/${id_passport}`);
            setErrorMessage('');
            setVehicles(response.data.vehicles);
            setFormData(response.data);
        } catch (error) {
            setVehicles(null);
            setErrorMessage('we can not find the booking');
        }
    };
    
    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
    
    try {
        const response = await axios.patch(`http://localhost:3001/booking/update/${id_passport}`)
        setVehicles(response.data.vehicles)
        setFormData(response.data)
    
    } catch (error) {
        setVehicles(null);
        setErrorMessage('Try more later')
    }
        
        
    };

    
    
    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
    
        try {
            await axios.delete(`http://localhost:3001/booking/delete/${id_passport}`);
            console.log('Reserva eliminada exitosamente')

        } catch (error) {
            setErrorMessage('No se pudo eliminar la reserva');
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
                                name='id_passport'
                                type="text"
                                placeholder="Ingrese el ID o Pasaporte"
                                value={id_passport}
                                onChange={handleIdPassportChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Consultar Reserva
                        </Button>


                        <Form.Group className="mb-3" controlId="full_name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='full_name' type="text" value={formData.full_name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control name='country' type="text" value={formData.country} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone_number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name='phone_number' type="text" value={formData.phone_number} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="date_in">
                    <Form.Label>Date In</Form.Label>
                    <Form.Control name='date_in' type="text" value={formData.date_in} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="hourin">
                    <Form.Label>Hour In</Form.Label>
                    <Form.Control name='hour_in' type="text" value={formData.hour_in} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="date_out">
                    <Form.Label>Date Out</Form.Label>
                    <Form.Control name='date_out' type="text" value={formData.date_out} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="hourout">
                    <Form.Label>Hour Out</Form.Label>
                    <Form.Control name='hour_out' type="text" value={formData.hour_out} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="airport">
                    <Form.Label>Airport</Form.Label>
                    <Form.Control name='airport' type="text" value={formData.airport} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="airline">
                    <Form.Label>Airline</Form.Label>
                    <Form.Control name='airline' type="text" value={formData.airline} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="no_flight">
                    <Form.Label>Number Of Flight</Form.Label>
                    <Form.Control name='no_flight' type="text" value={formData.no_flight} onChange={handleChange}/>
                </Form.Group>

                <img src={vehicles?.image} alt="Booked car" style={{ width: '400px' }} />
                <br />
                <p>Vehicle: {vehicles?.brand} {vehicles?.model} {vehicles?.year}</p>
                <p>Price: {vehicles?.price} per day</p>


                <Button className='btn btn-success m-5 btn-lg' variant="primary" type="button" onClick={handleUpdate} onChange={handleIdpassportUpdateChange} >
                            Update
                </Button>

                <Button className='btn btn-danger btn-lg m-5' variant="primary" type="button" onClick={handleDelete} onChange={handleIdpassportUpdateChange}>
                            Delete
                </Button>
                
                    </Form>
                    <br />

                    {errorMessage && <p>{errorMessage}</p>}
                </Col>
            </Row>
        </Container>
    );
}

export default GetBook;
