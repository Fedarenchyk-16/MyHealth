import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const CarouselComp = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/med2.jpg")}
                    alt="Tuning"
                />
                <Carousel.Caption>
                    <h3>Doctors</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../assets/slide2.jpg")}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Medcine</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComp;