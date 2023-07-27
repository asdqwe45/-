import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const Maincarousel = () => {
    return (
        <Carousel id="carouselExampleDark" variant="dark" prevIcon={false} nextIcon={false} className="fullscreen-carousel">
            <Carousel.Item interval={10000}>
                <img className="d-block w-100" src="/maindog11.jpg" alt="First slide" />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>유기견</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    <p>Some representative placeholder content for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src="/maindog19.jpg" alt="Second slide" />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>분실견</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                    <p>Some representative placeholder content for the second slide.</p>
                    <p>Some representative placeholder content for the second slide.</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/maindog17.jpg" alt="Third slide" />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>놀아주기</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                    <p>Some representative placeholder content for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Maincarousel;