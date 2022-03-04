import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/fruits.jpg'
import img2 from '../../../images/veg.jpg'
import img3 from '../../../images/3.webp'
import img4 from '../../../images/4.webp'
import img5 from '../../../images/5.webp'
import img6 from '../../../images/6.webp'

const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <Container >
             <div className="mx-auto  slick-product">
                <Slider {...settings}>
                    <div >
                        <Link to="/products" className="text-decoration-none text-dark">
                            <div className="card-product">
                                <img src={img} className="slick-img" alt="" />
                                <p className="mt-1 pt-1">Fresh Fruits</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-decoration-none text-dark">
                            <div className="card-product">
                                <img src={img2} className="slick-img " alt="" />
                                <p className="mt-1 pt-1">Vegetables</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-decoration-none text-dark">
                            <div className="card-product">
                                <img src={img3} className="slick-img " alt="" />
                                <p className="mt-1 pt-1">Beef</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-decoration-none text-dark">
                            <div className="card-product">
                                <img src={img4} className="slick-img " alt="" />
                                <p className="mt-1 pt-1">Chicken</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-decoration-none text-dark">
                            <div className="card-product">
                                <img src={img5} className="slick-img " alt="" />
                                <p className="mt-1 pt-1">Fresh Fish</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-decoration-none text-dark">
                            <div className="card-product">
                                <img src={img6} className="slick-img " alt="" />
                                <p className="mt-1 pt-1">Diet Food</p>
                            </div>
                        </Link>
                    </div>

                </Slider>
            </div>
        </Container>
    );
};

export default Carousel;