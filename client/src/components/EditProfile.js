import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl, Form, Alert } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect, useNavigate, useHistory } from 'react-router-dom';

const EditProfile = (props) => {

    const [show, setShow] = useState(false);
    const [alertText, setAlertText] = useState("");

    const [role, setRole] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [description, setDescription] = useState("");
    const [speciality, setSpeciality] = useState("");

    const [checkbox, setCheckbox] = useState(false);

    Axios.defaults.withCredentials = true;

    let history = useHistory();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/login")
            .then(
                (response) => {
                    setIsLoaded(true);
                    if (response.data.loggedIn == true) {
                        props.setIsAuth(true);
                        setRole(response.data.user[0].role);
                        setUserInfo(response.data)
                        setFirstname(response.data.user[0].firstname);
                        setLastname(response.data.user[0].lastname);
                        setDescription(response.data.user[0].description);
                        setSpeciality(response.data.user[0].speciality)
                    } else {
                        props.setIsAuth(false);
                    }
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        // if (response.data.loggedIn == true) {
        //     props.setIsAuth(true);
        //     setRole(response.data.user[0].role);
        //     setUserInfo(response.data)
        //     setFirstname(response.data.user[0].firstname);
        //     setLastname(response.data.user[0].lastname);
        //     setDescription(response.data.user[0].lastname);
        //     setSpeciality(response.data.user[0].speciality)
        // } else {
        //     props.setIsAuth(false);
        // }
        // const doQuery = async () => {
        //     await Axios.get("http://localhost:3001/login").then((response) => {
        //         if (response.data.loggedIn == true) {
        //             props.setIsAuth(true);
        //             setRole(response.data.user[0].role);
        //             setUserInfo(response.data)
        //             setFirstname(response.data.user[0].firstname);
        //             setLastname(response.data.user[0].lastname);
        //             setDescription(response.data.user[0].lastname);
        //             setSpeciality(response.data.user[0].speciality)
        //         } else {
        //             props.setIsAuth(false);
        //         }
        //     });
        // }
        // doQuery()
    }, []);

    const validateFields = () => {
        if (firstname.trim().length >= 500 || lastname.trim().length >= 500 || firstname.trim().length <= 1 || lastname.trim().length <= 1) {
            setAlertText("Error: Data shoul be no longer than 500 and not empty!")
            setShow(true);
        } else {
            if (userInfo.user[0].role === "doctor" && speciality == "speciality") {
                setAlertText("Error: Please, select speciality!")
                setShow(true);
            } else {
                const obj = {
                    firstname: firstname,
                    lastname: lastname,
                    oldPass: oldPass,
                    newPass: newPass,
                    description: description,
                    speciality: speciality,
                    user: userInfo.user[0],
                    checkbox: checkbox
                }
                sendUpdateQuery(obj);
            }
        }
    }

    const sendUpdateQuery = (obj) => {
        const doSearches = async (obj) => {
            await Axios.put("http://localhost:3001/account/edit", { obj: obj, role: role }).then(({ data }) => {
                console.log(data)
                // setUserData(data.result[0]);
            });
        }

        const editPatientWithoutPass = async (obj) => {
            await Axios.put("http://localhost:3001/account/edit/patient/without", { obj: obj, role: role }).then((data) => {
                console.log(data)
                console.log()
                // setUserData(data.result[0]);
            });
        }

        const checkPass = async (obj) => {
            await Axios.put("http://localhost:3001/account/edit", { obj: obj, role: role }).then(({ data }) => {
                console.log(data)
                if (data.err !== undefined) {
                    setAlertText("Error: " + data.err)
                    setShow(true);
                } else {
                    console.log("its good");
                    setShow(false);
                    history.push('/account');
                }
                // setUserData(data.result[0]);
            });
        }
        // if (obj.checkbox) {
        checkPass(obj);
        // } else {
        //     editPatientWithoutPass(obj);
        // }
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
                        <br></br>
                        <Container>
                            <Card>
                                <Card.Header as="h5" style={{ fontSize: "40px" }}>Edit user card</Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <img src={require("../assets/no-avatar.png")} style={{ height: "300px" }}></img>
                                        </Col>
                                        <Col>
                                            <Card.Title style={{ fontSize: "30px" }}> Email: {userInfo.user !== undefined ? userInfo.user[0].username : ""}</Card.Title>
                                            <Card.Text>
                                                Role: {userInfo.user !== undefined ? userInfo.user[0].role : ""}
                                            </Card.Text>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="inputGroup-sizing-default">Firstname</InputGroup.Text>
                                                <FormControl
                                                    aria-label="Firstname"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    value={firstname}
                                                    onChange={(event) => { setFirstname(event.target.value); }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="inputGroup-sizing-default">Lastname</InputGroup.Text>
                                                <FormControl
                                                    aria-label="Lastname"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    value={lastname}
                                                    onChange={(event) => { setLastname(event.target.value); }}
                                                />
                                            </InputGroup>
                                            <Card.Text>
                                                Password:
                                            </Card.Text>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="inputGroup-sizing-default">Old password</InputGroup.Text>
                                                <FormControl
                                                    aria-label="Lastname"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    value={oldPass}
                                                    onChange={(event) => { setOldPass(event.target.value); }}
                                                />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="inputGroup-sizing-default">New password</InputGroup.Text>
                                                <FormControl
                                                    aria-label="Lastname"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    value={newPass}
                                                    onChange={(event) => { setNewPass(event.target.value); }}
                                                />
                                            </InputGroup>
                                            {role === "doctor" ?
                                                <div>
                                                    <InputGroup className="mb-3">
                                                        <InputGroup.Text id="inputGroup-sizing-default">Description</InputGroup.Text>
                                                        <FormControl
                                                            aria-label="Description"
                                                            aria-describedby="inputGroup-sizing-default"
                                                            value={description}
                                                            onChange={(event) => { setDescription(event.target.value); }}
                                                        />
                                                    </InputGroup>
                                                    <Form.Select
                                                        aria-label="Default select example"
                                                        onChange={(event) => { setSpeciality(event.target.value) }}>
                                                        <option value="speciality">Select speciality</option>
                                                        <option selected value="dentist">Dentist</option>
                                                        <option value="surgeon">Surgeon</option>
                                                        <option value="dermatologist">Dermatologist</option>
                                                    </Form.Select>
                                                    <br></br>
                                                </div>
                                                : ""}
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Change password"
                                                    onChange={(event) => { setCheckbox(event.target.checked); }} //??????????
                                                />
                                            </Form.Group>
                                            <Button variant="primary" onClick={() => {
                                                validateFields();
                                            }}>Edit profile</Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <br></br>
                            {show ?
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                    <p>
                                        {alertText}
                                    </p>
                                </Alert>
                                : ""}
                        </Container>
                    </div>
                    :
                    <Redirect to="/login"></Redirect>
                }
            </div>
        )
    }
}

export default EditProfile;