import React, { Component } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import ProfileContainer from './ProfileContainer';
import './Profile.css'
import ModifyProfileCard from './ModifyProfileCard';
import AnnounceCard from './AnnounceCard';
import Dashboard from './Dashboard';
import Category from './Category'
import Interests from "./Interests"
import Experience from "./Experience"


export default class ProfileComponent extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="mt-5">
                        <Col md={8} style={{}}>
                            <ProfileContainer />
                            <Dashboard />
                            <Experience />
                            <Interests />
                        </Col>
                        <Col md={4} style={{flexDirection:"column", display:"flex", justifyContent:"start", alignItems:"center", textAlign:"center"}} className="mt-2 ">
                           <ModifyProfileCard/>
                           <AnnounceCard/>
                           <Category title="People you may know" />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
