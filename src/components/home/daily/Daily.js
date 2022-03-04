import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Daily.css'

const Daily = () => {
    const [dailys, setDailys] = useState([])
    useEffect(() => {
        fetch('./daily.json')
            .then(res => res.json())
            .then(data => {
                setDailys(data)
            })
    }, [])

    let Rsettings = {
        dot: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,

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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };

    return (
        <Container fluid className="w-75 mx-auto mt-5 pt-5">
            <h2 className="fs-2 text-center mb-5">Daily Deals</h2>
            <div className="daily-section">
                <Slider {...Rsettings}>
                    {
                        dailys.map(daily => (
                            <div className="card-daily d-flex">
                                <img src={daily.img} className="daily-img img-fluid me-1" alt="" />
                                <div className="mt-5 pt-5 ms-3">
                                    <h6 clssName="">{daily.name}</h6>
                                    <p clssName=""> Price : {daily.price}tk</p>
                                    <button className="btn-cart">ADD CART</button>
                                </div>

                            </div>
                        ))
                    }

                </Slider>
            </div>

        </Container>
    );
};

export default Daily;