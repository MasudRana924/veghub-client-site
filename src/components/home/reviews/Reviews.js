import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useForm } from 'react-hook-form';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() => {
        fetch('https://whispering-oasis-97010.herokuapp.com/getreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    let Rsettings = {

        infinite: false,
        speed: 1000,
        slidesToShow: 3,
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

    const onSubmit = data => {
       
    };
    return (
        <Container className="mt-5 pt-5">
            <h3 className="text-dark text-center fw-bold">Our Customer's Feedback </h3>
            <Row xs="1" md="2" className="mt-5">
                <Col md="5" className="mt-3">
                     <div>
                        <form className="review-form " onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue="" {...register("name")} placeholder="your name" />
                            <input defaultValue="" placeholder="your email" {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input defaultValue="" {...register("phone")} placeholder="your phone number" />
                            <input defaultValue="" {...register("address")} placeholder="your present address" />
                            <input defaultValue="" {...register("city")} placeholder="your city " />
                            
                            <input type="submit" className="btn-submit text-white fw-bold" />
                        </form>
                    </div> 
                </Col>
                <Col xs="12" md="7" className="review mt-3">
                    <Slider {...Rsettings}>
                        {
                            reviews.map(review => (
                                <div className="review-section">
                                    <div className="card-review">
                                        <img src={review.img} className="review-image" alt="" />
                                        <h5 className="card-title">{review.name}</h5>
                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;