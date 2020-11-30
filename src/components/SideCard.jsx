import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Description from './Description'
import ImageContainer from './ImageContainer'
import Title from './Title'



export default class SideCard extends Component {

    state = {

    }

    render() {
        return (
           <Card >
                <Row >
                    <Col md={1} ><ImageContainer imgSrc="./assets/profile.jpg" 
                    /></Col>
                    <Col md={11}>
                        <Row>
                            <Col md={10}>
                                <Title title="Otubuisn Ademuyiwa"/>
                                <Description description="Computer Engineer at SITA" />
                            </Col>
                            <Col md={2}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                </svg>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
           </Card>
        )
    }
}
