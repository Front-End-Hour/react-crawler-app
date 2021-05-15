import { Carousel, Button } from 'react-bootstrap';
import './home-page.scss';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory();
    return (<>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Image Crawler</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Link Crawler</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>React Crawl</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="button-holder">
            <Button onClick={() => history.push('/links')} variant="outline-secondary">Link Crawler</Button>
            <Button onClick={() => history.push('/images')} variant="outline-secondary">Image Crawler</Button>
        </div>
    </>);
}