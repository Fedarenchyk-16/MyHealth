import React, { useState, useEffect } from 'react';
import { Card, Container, Col, Row, Button } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect, useNavigate, useHistory } from 'react-router-dom';

const CardsList = () => {

    let history = useHistory();
    const [doctors, setDoctors] = useState([]);
    let len = 0;

    useEffect(() => {
        const doSearch = async () => {
            await Axios.get("http://localhost:3001/doctors").then(({ data }) => {
                console.log(data)
                setDoctors(data.result);
            });
            len = 0;
        }
        doSearch();
    }, []);


    const renderedItems = doctors.map((item) => {
        if (len <= 3) {
            if (item.role === "doctor") {
                len++;
                return (
                    <Container>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../assets/no-avatar.png")} />
                                <Card.Body>
                                    <Card.Title>{item.firstname + " " + item.lastname}</Card.Title>
                                    <Card.Text>
                                        {item.speciality}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>
                )
            }
        }
    });


    return (
        <Container style={{ textAlign: 'center' }}>
            <Container style={{ padding: '30px' }}>
                <Row xs={1} md={4} className="g-4">
                    {renderedItems}
                </Row>
                <br></br>
                <Button variant="primary" style={{ margin: '0 auto' }} onClick={() => {
                    history.push('/doctors');
                }}>All doctors</Button>
            </Container>
            <br></br>
            <br></br>
        </Container>
    )
}

export default CardsList;