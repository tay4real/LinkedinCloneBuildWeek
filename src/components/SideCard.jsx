import React, { Component } from 'react'
import { Row, Col, Image} from 'react-bootstrap'
import Description from './Description'
import ImageContainer from './ImageContainer'
import Title from './Title'



export default class SideCard extends Component {

    render() {
        return (        
                <Row className="py-2 px-1 mt-3">        
                    <Col md={3} ><ImageContainer imgSrc={this.props.imgSrc} /></Col>
                    <Col md={9}>
                        <Row>
                            <Col md={10}>
                                <Title title={this.props.title}/>
                                <Description description={this.props.description} />
                            </Col>
                            <Col md={2} className="rounded bg-grey">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                                </svg>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
           
        )
    }
}
