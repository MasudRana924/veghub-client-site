import React, { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Review.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    let Rsettings = {

        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <Container fluid className=" mt-5 pt-5">
            <h3 className="text-dark text-center fw-bold">Our Customer's Feedback </h3>
            <Row xs="1" md="1" className="mt-5">
                

                <Col xs="12" md="12" className="w-75 mx-auto review mt-3">
                    <Slider {...Rsettings}>
                        {
                            reviews.map(review => (
                                <div className="review-section">
                                    <div className="card-review">
                                        <img src={review.img} className="w-75 mx-auto review-image" alt="" />
                                        <h5 className="card-title">{review.name}</h5>
                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
                </Col>
            </Row>
            {/* <div className="mt-5 ">
                <Slider {...Rsettings}>
                    {
                        reviews.map(review => (
                            <div className="review-section">
                                <div className="card-review">
                                    <img src={review.img} className="w-75 mx-auto review-image" alt="" />
                                    <h5 className="card-title">{review.name}</h5>
                                </div>
                            </div>
                        ))
                    }

                </Slider>
            </div> */}

        </Container>
    );
};

export default Reviews; 