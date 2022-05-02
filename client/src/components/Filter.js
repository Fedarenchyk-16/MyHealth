import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap'
import "../App.css";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, users }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(users);
            return;
        }
        if (activeGenre === 1) {
            const filtered = users.filter((item) => item.role === "doctor")
            setFiltered(filtered);
            return;
        }
        if (activeGenre === 2) {
            const filtered = users.filter((item) => item.role === "patient")
            setFiltered(filtered);
            return;
        }
    }, [activeGenre])

    return (
        <div className="filter-container">
            <Container>
                <ButtonGroup size="lg" className="mb-2">
                    <Button id="first" className={activeGenre === 0 ? "primary" : "secondary"} onClick={() => {
                        setActiveGenre(0);

                    }}>All</Button>
                    <Button id="second" className={activeGenre === 1 ? "primary" : "secondary"} onClick={() => {
                        setActiveGenre(1);

                    }}>Doctors</Button>
                    <Button id="third" className={activeGenre === 2 ? "primary" : "secondary"} onClick={() => {
                        setActiveGenre(2);
                    }}>Patients</Button>
                </ButtonGroup>
            </Container>
        </div>
    )
}

export default Filter;