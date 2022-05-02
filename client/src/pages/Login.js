import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import "../App.css";
import { Redirect, useNavigate, useHistory } from 'react-router-dom';

export default function Registration(props) {

    const [show, setShow] = useState(false);
    const [alertText, setAlertText] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState(false);

    let history = useHistory();
    Axios.defaults.withCredentials = true;

    const userAuthenticated = () => {
        Axios.get("http://localhost:3001/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            }
        }).then((response) => {
            console.log(response)
        })
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (!response.data.auth) {
                setLoginStatus(false);
                props.setIsAuth(false);
                setShow(true);
                setAlertText("Incorrect data!");
            } else {
                localStorage.setItem("token", response.data.token)
                setLoginStatus(true);
                props.setIsAuth(true);
                history.push("/account");
            }
        });
    };

    useEffect(() => {
        console.log("rerender login");
        Axios.get("http://localhost:3001/login").then((response) => {
            console.log(response);
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username);
                props.setIsAuth(true);
            } else {
                props.setIsAuth(false);
            }
        });
    }, []);

    return (
        <Container>
            <Row>
                <Col lg={{ span: 5, offset: 3 }}>
                    <br></br>
                    <br></br>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                    <Form.Text className="text-muted">
                                        Hmmmm Smth good
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </Form.Group>
                                <Button variant="primary" onClick={login}>
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <br></br>
                    {show ?
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                                {alertText}
                            </p>
                        </Alert>
                        : ""}
                </Col>
            </Row>

            {loginStatus && (<button onClick={userAuthenticated}>Check if Auth</button>)}
        </Container >
    );
}
