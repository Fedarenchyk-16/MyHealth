import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl, Form } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import "../App.css";
import Filter from './Filter'
import Account from './Account'
import UserModal from './UserModal'

const Doctors = (props) => {

    const [modalShow, setModalShow] = useState(false);
    const [clickedCard, setClickedCard] = useState([]);

    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);
    const [userData, setUserData] = useState({})

    const [search, setSearch] = useState("")


    Axios.defaults.withCredentials = true;
    useEffect(() => {
        const doSearches = async () => {
            await Axios.get("http://localhost:3001/login").then((response) => {
                if (response.data.loggedIn == true) {
                    props.setIsAuth(true);
                } else {
                    props.setIsAuth(false);
                }
            });
            await Axios.get("http://localhost:3001/doctors").then(({ data }) => {
                console.log("get doctors");
                console.log(data)
                setUsers(data.result);
                setFiltered(data.result);
            });
        }
        doSearches();
    }, []);

    const getUserInfo = (id) => {
        const doSearches = async () => {
            console.log({ firstname: id[0], lastname: id[1] })
            await Axios.post("http://localhost:3001/user", { firstname: id[0], lastname: id[1] }).then(({ data }) => {
                console.log("get user info");
                console.log(data)
                setUserData(data.result[0]);
            });
        }
        doSearches();
    }



    const renderedItems = filtered.map((item) => {

        if (item.firstname) {
            if (item.lastname.toLowerCase().includes(search.toLowerCase())) {
                return (

                    <Container key={item.id}>
                        <UserModal
                            show={modalShow}
                            userdata={userData}
                            onHide={() => setModalShow(false)}
                        />
                        <Col>
                            <Card style={{ Width: "280px" }}>
                                <Card.Img variant="top" src={item.role === "doctor" ? require("../assets/no-avatar.png") : require("../assets/no-avatar.png")} style={{ height: "256px" }} />
                                <Card.Body>
                                    <Card.Title>{item.firstname + " " + item.lastname}</Card.Title>
                                    <Card.Text>
                                        {item.role}
                                    </Card.Text>
                                    <Button variant="primary" id={`${item.firstname} ${item.lastname}`} onClick={(e) => {
                                        console.log(e.target.id.split(" "))
                                        getUserInfo(e.target.id.split(" "))
                                        setModalShow(true)
                                    }}>More info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>
                )
            }
        }
    });

    return (
        <div>
            {props.isAuth
                ?
                <div>
                    <br></br>
                    <br></br>
                    <Filter users={users} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}></Filter>

                    <Container>
                        <br />
                        <Form.Control placeholder="Search by lastname" value={search} onChange={(event) => {
                            setSearch(event.target.value);
                            console.log(search)
                            console.log(filtered)
                            // setFiltered(users.filter(item => {
                            //     return item.lastname.toLowerCase().includes(search.toLowerCase())
                            // }))
                        }} />
                        <br></br>
                        <Row xs={1} md={4} className="g-4">
                            {renderedItems}
                        </Row>
                    </Container>
                    {/*<Container>
                        <div className="App">
                            <Filter users={users} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}></Filter>
                            <div className="users">
                                {renderedItems}
                            </div>
                        </div>

                    </Container>*/}

                </div>
                :
                <Redirect to="/login"></Redirect>
            }
        </div>
    )
}

export default Doctors;