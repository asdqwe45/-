import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const Maincarousel = () => {
    return (
        <Carousel id="carouselExampleDark" variant="dark" prevIcon={false} nextIcon={false} className="fullscreen-carousel">
            <Carousel.Item interval={10000}>
                <img className="d-block w-100" src="/maindog11.jpg" alt="First slide" />
                <Carousel.Caption className="d-none d-md-block">

                    <p style={{
                        fontSize: '40px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'Arial Black'
                    }}>인간에게는 동물을 다스릴 권리가 있는 것이 아니라<br />
                        모든 생명체를 지킬 의무가 있다  -제인 구달-
                    </p>



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