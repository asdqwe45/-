import Carousel from 'react-bootstrap/Carousel';

const Maincarousel = () => {
    return (
        <Carousel id="carouselExampleDark" variant="dark" prevIcon={false} nextIcon={false}>
            <Carousel.Item interval={10000}>
                <img className="d-block w-100" src="/maindog1.jpg" alt="First slide" />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src="/dog1.jpg" alt="Second slide" />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/dog2.jpg" alt="Third slide" />
                <Carousel.Caption className="d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Maincarousel