import Carousel from 'react-bootstrap/Carousel';
import audis32021 from "../img/audis32021.jpg"
import changancs95 from "../img/changancs95.jpg"
import camry from "../img/camry.png"
import { Image } from 'react-bootstrap';




export default function Carousell() {
    return (
        <>
        <Carousel data-bs-theme="light">
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src={audis32021}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src={changancs95}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image
                className="d-block w-100"
                src={camry}
                alt="First slide"
            />
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </>
    );
}
