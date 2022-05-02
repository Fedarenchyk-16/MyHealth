import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Button, Col, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap'
import "../App.css";

const UserQuerysFilter = ({ setActiveGenre, activeGenre, setFiltered, querys }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(querys);
            return;
        }
        if (activeGenre === 1) {
            const filtered = querys.filter((item) => item.status === "COMPLETED")
            setFiltered(filtered);
            return;
        }
        if (activeGenre === 2) {
            const filtered = querys.filter((item) => item.status === "ACTIVE")
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

                    }}>COMPLETED</Button>
                    <Button id="third" className={activeGenre === 2 ? "primary" : "secondary"} onClick={() => {
                        setActiveGenre(2);
                    }}>ACTIVE</Button>
                </ButtonGroup>
            </Container>
        </div>
    )
}

export default UserQuerysFilter;