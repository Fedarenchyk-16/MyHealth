import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import "../App.css";
import { Redirect, useNavigate, useHistory } from 'react-router-dom';

export default function Registration(props) {
  const [show, setShow] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [checkboxDoctor, setCheckboxDoctor] = useState(false);

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

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      doctor: checkboxDoctor
    }).then((response) => {
      console.log(response);
      if (response.data.error !== undefined) {
        console.log("not undefind")
        setShow(true);
        setAlertText("User with this data already exist!");
      } else {
        console.log("undefind")

        history.push('/login');

      }
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  }

  return (
    <Container>
      <Row>
        <Col lg={{ span: 5, offset: 3 }}>
          <br></br>
          <br></br>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Registration</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" onChange={(e) => {
                    setUsernameReg(e.target.value);
                  }} />
                  <Form.Text className="text-muted">
                    Hmmmm Smth good
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Doctor" onChange={(event) => { setCheckboxDoctor(event.target.checked); }} />
                </Form.Group>
                <Button variant="primary" onClick={() => {
                  if (validateEmail(usernameReg) && validatePassword(passwordReg)) {
                    register()
                  } else {
                    setShow(true);
                    setAlertText("Check: \n Email should be correct. Example: text@gmail.com \n Password length should be 8 or more.");
                  }
                }
                }>
                  Register
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
          <br></br>
          <br></br>
          <div style={{ textAlign: 'center' }}>
            <div onClick={() => {
              console.log("click");
              history.push('/login');
            }
            }> Already have an account?</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
