import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

interface Vehicle {
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    seats: number;
    image: string;
    gas: string;

}

const CardsGallery: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        const getVehicles = async () => {
        try {
            const response: AxiosResponse<Vehicle[]> = await axios.get<Vehicle[]>('http://localhost:3001/vehicles');
            setVehicles(response.data);
        } catch (error) {
            console.error('Error al obtener vehículos:', error);
        }
    };

    getVehicles();
    }, []);

    const Vehiclesrender = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-3">
        {vehicles.map((vehicle: Vehicle) => (
            <Col style={{ padding: '3rem'}} key={vehicle.id}>
                <Card style={{ width: '25rem'}}>
                <Card.Img variant="top" src={vehicle.image} style={{ width: '100%', height: 'auto' }} />
                <Card.Body>
                    <Card.Title>{vehicle.brand}, {vehicle.model}, {vehicle.year}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price: {vehicle.price} per day</ListGroup.Item>
                    <ListGroup.Item>{vehicle.seats} passengers</ListGroup.Item>
                    <ListGroup.Item>{vehicle.gas}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/booking">Book Now</Card.Link>
                </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    );
    };

    return (
        
            Vehiclesrender()
        
    );
};

export default CardsGallery;
