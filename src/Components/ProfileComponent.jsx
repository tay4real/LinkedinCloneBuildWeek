import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProfileContainer from './ProfileContainer';
export default class ProfileComponent extends Component {
    render() {
        return (
            <>
            <Container>
                <Row className="mt-5">
                    <Col md={8} style={{height:"500px", backgroundColor:"red"}}>
                    <ProfileContainer/>
                    </Col>
                    <Col md={4} style={{height:"500px", backgroundColor:"blue"}}>
                        <Category title="People you may know" />
                    </Col>
                </Row>
                </Container>
            </>
        )
    }
}
