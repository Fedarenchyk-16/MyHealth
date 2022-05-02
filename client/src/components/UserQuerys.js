import React, { useState, useEffect } from 'react';
import { Card, Container, Form, Button, Modal, Col, Accordion } from 'react-bootstrap'
import Axios from "axios";
import { Redirect, useNavigate, useHistory } from 'react-router-dom';
import { Routes, Route, Link, Switch } from 'react-router-dom';
import Answer from "./Answer";
import "../App.css";
import UserQuerysFilter from './UserQuerysFilter'

const UserQuerys = (props) => {


    const [filtered, setFiltered] = useState([]);

    const [isAuth, setIsAuth] = useState(false);
    const [userQuerys, setUserQuerys] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    const [doctor, setDoctor] = useState({});
    const [user, setUser] = useState({});

    const [updater, setUpdater] = useState(0);


    Axios.defaults.withCredentials = true;
    useEffect(() => {
        // getUserInfo();
        // getListOfUserQuerys();
        const doSearches = async () => {
            let u = 0;
            await Axios.get("http://localhost:3001/login").then((response) => {
                if (response.data.loggedIn == true) {
                    props.setIsAuth(true);
                    console.log(response.data.user[0])
                    setUser(response.data.user[0]);
                    u = response.data.user[0].id;
                } else {
                    props.setIsAuth(false);
                }
            });
            await Axios.post("http://localhost:3001/appointment/user", { id: u }).then(({ data }) => {
                console.log("get querys");
                console.log(user.id);
                console.log(data)
                setUserQuerys(data.result);
                setFiltered(data.result);
            });
        }
        doSearches();
    }, []);

    const renderedItems = filtered.map((item) => {

        return (

            <Accordion.Item eventKey={item.id} onClick={async () => {
                if (item.status === "COMPLETED") {
                    await Axios.post("http://localhost:3001/user/id", { id: item.doctor }).then(({ data }) => {
                        setDoctor(data.result[0]);
                        console.log(data.result[0])
                    });
                }
            }}>
                <Accordion.Header>Theme: {item.theme} [{item.status}]</Accordion.Header>
                <Accordion.Body>
                    <div>Created at: {item.creation_date}</div>
                    <div>Text: {item.text}</div>
                    <br></br>
                    {item.status === "COMPLETED" ?
                        <div>
                            <div>Answered at: {item.approve_date}</div>
                            <div>Doctor: {doctor.firstname} {doctor.lastname}</div>
                            <div>Answer: {item.answer}</div>
                        </div>
                        : ""
                    }


                </Accordion.Body>
            </Accordion.Item>

        )
    });



    return (
        <div>
            {props.isAuth
                ?
                <div>
                    <Container style={{ padding: '30px' }}>
                        <br></br>
                        <br></br>
                        <UserQuerysFilter querys={userQuerys} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}></UserQuerysFilter>
                        <br></br>
                        <br></br>
                        {/*
                        <Row xs={1} md={8} className="g-4">
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

export default UserQuerys;