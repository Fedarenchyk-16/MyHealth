import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, Modal, FormControl } from 'react-bootstrap'
import Axios from 'axios';

function UserModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User Info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col lg={4}>
                        <img src={require("../assets/avatar2.jpg")} style={{ height: "200px" }}></img>
                    </Col>
                    <Col lg={8}>
                        <h2>{props.userdata.firstname} {props.userdata.lastname}</h2>
                        <h4>Speciality: {props.userdata.speciality}</h4>
                        <h4>Role: {props.userdata.role}</h4>
                        <h4>Description:  {props.userdata.description}</h4>
                        <br></br>
                        <h4>Email:  {props.userdata.username}</h4>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;