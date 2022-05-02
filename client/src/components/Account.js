import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect, useNavigate, useHistory } from 'react-router-dom';

const Account = (props) => {
    const [role, setRole] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    let history = useHistory();

    useEffect(() => {
        const doSearches = async () => {
            console.log("account rerender")
            await Axios.get("http://localhost:3001/login").then((response) => {
                if (response.data.loggedIn == true) {
                    props.setIsAuth(true);
                    setRole(response.data.user[0].role);
                    console.log(response.data)
                    setUserInfo(response.data)
                } else {
                    props.setIsAuth(false);
                }
            });
        }
        doSearches();
    }, []);

    return (
        <div>
            {props.isAuth
                ?
                <div>
                    <br></br>
                    <br></br>
                    <Container>
                        <Card>
                            <Card.Header as="h5" style={{ fontSize: "40px" }}>User card</Card.Header>
                            <Card.Body>
                                <Row>

                                    <Col>
                                        <img src={require("../assets/no-avatar.png")} style={{ height: "300px" }}></img>
                                    </Col>
                                    <Col>
                                        <Card.Title style={{ fontSize: "30px" }}> Email: {userInfo.user !== undefined ? userInfo.user[0].username : ""}</Card.Title>
                                        <Card.Text>
                                            Firstname: {userInfo.user !== undefined ? userInfo.user[0].firstname : ""}
                                        </Card.Text>
                                        <Card.Text>
                                            Lastname:{userInfo.user !== undefined ? userInfo.user[0].lastname : ""}
                                        </Card.Text>
                                        <Card.Text>
                                            Role: {userInfo.user !== undefined ? userInfo.user[0].role : ""}
                                        </Card.Text>
                                        {role === "doctor" ?
                                            <div>
                                                <Card.Text>
                                                    Description:{userInfo.user !== undefined ? userInfo.user[0].description : ""}
                                                </Card.Text>
                                                <Card.Text>
                                                    Speciality: {userInfo.user !== undefined ? userInfo.user[0].speciality : ""}
                                                </Card.Text>
                                            </div>
                                            :
                                            ""}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Button variant="primary" onClick={() => {
                            history.push('/editProfile');
                        }}>Edit profile</Button>
                    </Container>


                </div>
                :
                <Redirect to="/login"></Redirect>
            }
        </div >
    )
}

export default Account;