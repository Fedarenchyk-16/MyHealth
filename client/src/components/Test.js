import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl, Form, Alert, Spinner } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import "../App.css";
import Filter from './Filter'
import Account from './Account'
import UserModal from './UserModal'

const Test = (props) => {

    const [show, setShow] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [alertHeader, setAlertHeader] = useState("");
    const [alertType, setAlertType] = useState("");

    const [errorMail, setErrorMail] = useState(null);
    const [isLoadedMail, setIsLoadedMail] = useState(false);
    const [loading, setLoading] = useState(false);

    const [role, setRole] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    const [phone, setPhone] = useState("");
    const [temperature, setTemperature] = useState(0);
    const [days, setDays] = useState(0);

    const [checkboxQuinsy, setCheckboxQuinsy] = useState(false);
    const [checkboxMigrane, setCheckboxMigrane] = useState(false);
    const [checkboxCold, setCheckboxCold] = useState(false);
    const [checkboxExposure, setCheckboxExposure] = useState(false);

    let badCounter = 0;

    useEffect(() => {
        const doSearches = async () => {
            console.log("test rerender")
            await Axios.get("http://localhost:3001/login").then(
                (response) => {
                    if (response.data.loggedIn == true) {
                        props.setIsAuth(true);
                        setRole(response.data.user[0].role);
                        console.log(response.data)
                        setUserInfo(response.data)
                    } else {
                        props.setIsAuth(false);
                    }
                    setIsLoaded(true);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }
        doSearches();
    }, []);

    const valPhone = () => {
        if (String(phone).toLowerCase().match(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/)) {
            return true;
        } else {
            return false;
        }
    }

    const valTemp = () => {
        try {
            const temp = parseFloat(temperature)
            if (temp > 30 && temp < 40) {
                badCounter += 10
                return true
            } else if (temp >= 40) {
                badCounter += 30
                return true
            } else {
                console.log("< 30")
                return false
            }
        } catch (e) {
            return false;
            console.log("exception")
        }
    }

    const valDays = () => {
        try {
            const day = parseInt(days)
            if (day >= 0 && day <= 3) {
                badCounter += 10
                return true
            } else if (day >= 4) {
                badCounter += 30
                return true
            } else {
                return false
                console.log("< 0")
            }
        } catch (e) {
            console.log("exception")
            return false;
        }
    }

    const validateData = () => {
        if (valPhone()) {
            console.log("badCounter: " + badCounter)
            if (valTemp()) {
                console.log("badCounter: " + badCounter)
                if (valDays()) {
                    console.log("badCounter: " + badCounter)
                    setShow(false);
                    if (checkboxQuinsy) { badCounter += 5 }
                    console.log("badCounter: " + badCounter)
                    if (checkboxMigrane) { badCounter += 5 }
                    console.log("badCounter: " + badCounter)
                    if (checkboxCold) { badCounter += 5 }
                    console.log("badCounter: " + badCounter)
                    if (checkboxExposure) { badCounter -= 20 }
                    console.log("badCounter: " + badCounter)

                    if (badCounter >= 20) {
                        sendMessage()
                    } else {
                        setAlertType("success")
                        setShow(true);
                        setAlertHeader("Everything is ok, we think")
                        setAlertType("success")
                        setAlertText("Its a flue, we think. Wait for some days");
                    }
                } else {
                    setShow(true);
                    setAlertHeader("Oh snap! You got an error!")
                    setAlertType("danger")
                    setAlertText("Days should be integer number and cant be lower than 0");
                }
            } else {
                setShow(true);
                setAlertHeader("Oh snap! You got an error!")
                setAlertType("danger")
                setAlertText("Temperature should be float number and cant be lower than 30");
            }
        } else {
            setShow(true);
            setAlertHeader("Oh snap! You got an error!")
            setAlertType("danger")
            setAlertText("Incorrect phone number");
        }
    }


    const sendMessage = async () => {
        setLoading(true)
        console.log(userInfo);
        Axios.post("http://localhost:3001/test", { user: `${userInfo.user[0].firstname}${userInfo.user[0].lastname}`, email: userInfo.user[0].username, phone: phone }).then(
            (response) => {
                setLoading(false)
                console.log(response)

                setAlertType("success")
                setShow(true);
                setAlertHeader("Success")
                setAlertType("success")
                setAlertText("Results of your testing sends successful! Doctors will call you immediately!");
            },
            (error) => {
                setLoading(false)
            }
        )

    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                {props.isAuth
                    ?
                    <div>
                        <br></br>
                        <Container>
                            <Col>
                                <Card>
                                    <Card.Header>Health test</Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Phone number</Form.Label>
                                                <Form.Control type="tel" placeholder="Enter phone number" value={phone}
                                                    onChange={(event) => { setPhone(event.target.value); }} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Temperature</Form.Label>
                                                <Form.Control type="text" placeholder="Temperature" value={temperature}
                                                    onChange={(event) => { setTemperature(event.target.value); }} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>How many days you feel bad?</Form.Label>
                                                <Form.Control type="text" placeholder="Number of days" value={days}
                                                    onChange={(event) => { setDays(event.target.value); }} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Quinsy" onChange={(event) => { setCheckboxQuinsy(event.target.checked); }} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Migraine" onChange={(event) => { setCheckboxMigrane(event.target.checked); }} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Cold" onChange={(event) => { setCheckboxCold(event.target.checked); }} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Was an a exposure" onChange={(event) => { setCheckboxExposure(event.target.checked); }} />
                                            </Form.Group>

                                            <Button variant="primary" onClick={() => {
                                                validateData()
                                                // sendMessage()
                                            }}>Submit</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <br></br>
                                <br></br>
                                {console.log(loading)}
                                {show ?
                                    <Alert variant={alertType} onClose={() => setShow(false)} dismissible>
                                        <Alert.Heading>{alertHeader}</Alert.Heading>
                                        <p>
                                            {alertText}
                                        </p>
                                    </Alert>
                                    : ""}
                                <br></br>
                                {loading ?
                                    <Spinner animation="border" variant="primary" />
                                    : ""}
                            </Col>
                        </Container>
                    </div>
                    :
                    <Redirect to="/login"></Redirect>
                }
            </div >
        )
    }
}

export default Test;