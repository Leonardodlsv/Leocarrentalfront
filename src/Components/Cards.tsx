import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import changancs95 from "../img/changancs95.jpg";
import { Row, Col } from 'react-bootstrap';

export default function Cards() {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col key={idx}>
                    <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={changancs95} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: 65$ per day</ListGroup.Item>
                <ListGroup.Item>5 passengers</ListGroup.Item>
                <ListGroup.Item>Gas</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="/booking">Book Now</Card.Link>
                <Card.Link href="/vehicles">See more</Card.Link>
            </Card.Body>
        </Card>
                </Col>
            ))}
    </Row>
    );
}

