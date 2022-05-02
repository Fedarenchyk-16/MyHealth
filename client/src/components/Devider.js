import React, { useState } from 'react';
import { Accordion, Container, Row } from 'react-bootstrap'

const Devider = (props) => {
    return (
        <Row style={{ backgroundColor: '#007bff', textAlign: 'center' }}>
            <div style={{ padding: " 20px 30px", fontSize: "25px", color: 'white' }}>{props.text}</div>
        </Row>
    )
}

export default Devider;