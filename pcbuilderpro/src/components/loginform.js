import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const LoginForm = () => {
    return (
        <>
            <div>
                <h2 className="shadow-sm bg-dark text-light mt-0 p-3 text-center">Login</h2>
                <Row className="mt-1">
                    <Col lg={4} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>UserID</Form.Label>
                                <Form.Control type="text" placeholder="Enter UserID" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <br></br>

                            <Button variant="primary btn" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">PCBuilderPro</h6>
            </div>
        </>
    );
};

export default LoginForm;