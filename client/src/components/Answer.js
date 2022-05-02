import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import "../App.css";
import Filter from './Filter'
import Account from './Account'
import UserModal from './UserModal'

const Answer = (props) => {

    console.log("in answer")
    console.log(props)

    return (
        <div>
            Text: {props.item.text}
        </div>
    )
}

export default Answer;