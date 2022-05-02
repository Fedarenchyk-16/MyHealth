import React, { useState, useEffect } from 'react';
import CarouselComp from '../components/CarouselComp'
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import AboutAccordion from '../components/AboutAccordion';
import CardsList from '../components/CardsList';
import Devider from '../components/Devider';
import Weather from '../components/Weather';
import News from '../components/News';
import Axios from 'axios';

const Home = (props) => {

    const [doctors, setDoctors] = useState([]);




    const renderedItems = doctors.map((item) => {
        return (
            <Container>
                {/*<Col>
                    <Card>
                        <Card.Img variant="top" src={require("../../assets/card.jpg")} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button variant="primary">{item.price}</Button>
                        </Card.Body>
                    </Card>
                </Col>*/}
            </Container>
        )
    });

    return (

        <div style={{ marginBottom: "50px" }}>
            <CarouselComp></CarouselComp>
            <Devider text="Some words about us"></Devider>
            <AboutAccordion></AboutAccordion>
            <Devider text="Our staff"></Devider>
            <CardsList></CardsList>
            <Devider text="Weather"></Devider>
            <Weather></Weather>
            <Devider text="News"></Devider>
            <News></News>
            <Devider text=""></Devider>
        </div>

    )
}

export default Home;