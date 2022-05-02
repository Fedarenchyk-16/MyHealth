import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import "../App.css";
import Filter from './Filter'
import Account from './Account'
import UserModal from './UserModal'

const Logout = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/logout")
            .then(
                (response) => {
                    localStorage.setItem("token", "");
                    console.log(response)
                    setIsLoaded(true);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <Redirect to="/login" />
        )
    }
}

export default Logout;