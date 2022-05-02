import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button, Modal, Col, Accordion, Alert } from 'react-bootstrap'
import Axios from "axios";
import { Redirect, useNavigate, useHistory } from 'react-router-dom';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import Answer from "./Answer";

const HelpSomeone = (props) => {


    // const [show, setShow] = useState(false);
    const [alertText, setAlertText] = useState("");


    const [modalShow, setModalShow] = useState(false);
    const [clickedCard, setClickedCard] = useState([]);

    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);


    const [answer, setAnswer] = useState('');
    const [modalText, setModalText] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [item, setItem] = useState({})
    const [userData, setUserData] = useState({})
    const [isAuth, setIsAuth] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState({});

    const [updater, setUpdater] = useState(0);


    Axios.defaults.withCredentials = true;
    useEffect(() => {
        getUserInfo();
        getListOfAppointments();
    }, [updater]);

    const getUserInfo = () => {
        console.log("Get user info")
        const doSearches = async () => {

            Axios.get("http://localhost:3001/login").then((response) => {
                if (response.data.loggedIn == true) {
                    props.setIsAuth(true);
                    setUser(response.data.user[0]);
                } else {
                    props.setIsAuth(false);
                }
            });
        }
        doSearches();
    }

    const getListOfAppointments = () => {
        const doSearches = async () => {
            await Axios.get("http://localhost:3001/appointment/active").then(({ data }) => {
                console.log("get appointments");
                console.log(data)
                setAppointments(data.result);
                setFiltered(data.result);
            });
        }
        doSearches();
    }

    const sendAnswer = (item) => {
        console.log(item);
        console.log("Sending answer")
        if (answer.trim().length <= 500 && answer.trim().length >= 10) {
            const doSearches = async () => {
                await Axios.put("http://localhost:3001/appointment/answer", { app_id: item.id, cl_id: item.client, doc_id: user.id, theme: item.theme, text: item.text, cr_date: item.creation_date, answer: answer }).then(({ data }) => {
                    console.log(data)
                    console.log("SENDED")
                    setModalText({ head: "Success", body: "Answer send successfuly!" })
                    handleShow();
                    setUpdater(updater + 1);
                    setAnswer("");
                }).catch((e) => {
                    console.log("Error");
                    console.log(e.message);
                    setModalText({ head: "Error", body: `Answer Dont send! Error ${e.message}` })
                    handleShow();
                });
            }
            doSearches();
        } else {
            console.log("you are fucked with length")
            setModalText({ head: "Error: ", body: "\nLength of answer should be lower than 500 and more than 10!" })
            handleShow();
            setUpdater(updater + 1);
        }
    }

    const renderedItems = appointments.map((item) => {

        return (
            <Container>
                <Col>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{modalText.head}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{modalText.body}</Modal.Body>
                        <Modal.Footer>

                            <Button variant="primary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Accordion.Item eventKey={item.id} onClick={async () => {
                        console.log(item.client);
                        await Axios.post("http://localhost:3001/user/id", { id: item.client }).then(({ data }) => {
                            console.log("get appointments");
                            console.log(data)
                            setUserData(data.result[0]);
                        });
                    }}>
                        <Accordion.Header>Theme: {item.theme} [{item.status}]</Accordion.Header>
                        <Accordion.Body>
                            <div>Date: {item.creation_date}</div>
                            <div>User: {userData.firstname} {userData.lastname}</div>
                            <div>Text: {item.text}</div>
                            <br></br>
                            <Form.Group className="mb-3">
                                <Form.Label>Your answer:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=">>>"
                                    value={answer}
                                    onChange={(event) => { setAnswer(event.target.value); }}
                                    id="text"
                                    rows={3} />
                            </Form.Group>



                            <Button variant="primary" onClick={(e) => {
                                getUserInfo();
                                if (props.isAuth) {
                                    // e.preventDefault();
                                    sendAnswer(item);
                                } else {
                                    console.log("Fucked")
                                }
                            }}>Answer</Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Col>
            </Container >
        )
    });



    return (
        <div>
            {props.isAuth
                ?
                <div>
                    <Container style={{ padding: '30px' }}>
                        {/*<Row xs={1} md={8} className="g-4">
                            {renderedItems}
            </Row>*/}
                        <Accordion defaultActiveKey="0">
                            {renderedItems}
                        </Accordion>
                    </Container>

                </div>
                :
                <Redirect to="/login"></Redirect>
            }
        </div>


    )
}

export default HelpSomeone;