import React from 'react';
import banner from './banner.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*import img1 from './images/p1.jpg';
import img2 from './images/p2.jpg';
import img3 from './images/p3.jpg';*/

const Banner = () => {
    return (
        <section className="banner-section">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="4000">
                        <div className="imgcarousel1"><div className="opacity"></div></div>
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <div className="imgcarousel2"><div className="opacity"></div></div>
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <div className="imgcarousel3"><div className="opacity"></div></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );

}

export default Banner;