import React, { useState, useEffect } from 'react';
import { Accordion, Container, Form, Button, Row, Col, Modal } from 'react-bootstrap'
import Axios from "axios";
import { Redirect } from 'react-router-dom';

const GetHelp = (props) => {
    const [modalText, setModalText] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updater, setUpdater] = useState(0);
    // const [modalShow, setModalShow] = useState(false);
    // const [clickedCard, setClickedCard] = useState([]);

    // const [users, setUsers] = useState([]);
    // const [filtered, setFiltered] = useState([]);
    // const [activeGenre, setActiveGenre] = useState(0);
    // const [userData, setUserData] = useState({})



    const [user, setUser] = useState({});


    Axios.defaults.withCredentials = true;
    useEffect(() => {
        getUserInfo();
    }, [updater]);

    const getUserInfo = () => {
        console.log("Get user info")
        const doSearches = async () => {

            Axios.get("http://localhost:3001/login").then((response) => {
                console.log(response);
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

    const validateAppointment = (theme, text) => {
        if (theme.value == "error") {
            return false;
        } else if (text.value.trim().length >= 500 || text.value.trim().length <= 10) {
            return false;
        } else {
            return true;
        }
    }

    const sendAppointment = () => {
        const theme = document.getElementById("select");
        const text = document.getElementById("text");
        if (validateAppointment(theme, text)) {
            console.log("Sending appointment")
            const doSearches = async () => {
                await Axios.post("http://localhost:3001/appointment/new", { id: user.id, theme: theme.value, text: text.value }).then(({ data }) => {
                    console.log(data)
                    console.log("SENDED")
                    text.value = "";
                    const check = document.getElementById("check");
                    check.checked = false;
                    setModalText({ head: "Success", body: "Your appointment send successfuly!" })
                    handleShow();
                    setUpdater(updater + 1);
                }).catch((e) => {
                    console.log("Error")
                    setModalText({ head: "Error", body: `Your appointment Dont send! Error ${e.message}` })
                    handleShow();
                    setUpdater(updater + 1);
                });
            }
            doSearches();
        } else {
            console.log("Error")
            setModalText({ head: "Error", body: `Invalid data! Check it out!\n Theme should be selected! \n Text should be no longer than 500 and more than 10 characters!` })
            handleShow();
            setUpdater(updater + 1);
        }
    }

    return (
        <div>
            {props.isAuth
                ?
                <Container>
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
                    <br></br>
                    <h2>Get Help</h2>
                    <br></br>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How to use it??</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How long you need to wait?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Other questions?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br></br>
                    <br></br>

                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4">
                                <Form.Label>Theme</Form.Label>
                                <Form.Select aria-label="Default select example" id="select">
                                    <option value="error">Select theme there</option>
                                    <option selected value="dentist">dentistry</option>
                                    <option value="surgeon">surgery</option>
                                    <option value="dermatologist">dermatology</option>
                                </Form.Select>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Text</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    required
                                    id="text"
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="..."
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <>
                                <Form.Label>Range of heart</Form.Label>
                                <Form.Range />
                            </>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                id="check"
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button onClick={(e) => {
                            getUserInfo();
                            console.log(user)
                            console.log(props.isAuth)
                            if (props.isAuth) {
                                e.preventDefault();
                                sendAppointment();
                            } else {
                                console.log("Fucked")
                            }
                        }}>Submit form</Button>
                    </Form>
                </Container >
                :
                <Redirect to="/login"></Redirect>
            }
        </div>
    )
}

export default GetHelp;