import React, { Component } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './SinglePost.css';
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import {AiOutlineLike} from 'react-icons/ai';
import {RiMessageLine} from 'react-icons/ri';
import {IoMdShareAlt} from 'react-icons/io';
import {RiSendPlaneFill} from 'react-icons/ri';
export default class SinglePost extends Component {

    render() {
        return (
            <div>
                <Card className="d-block mt-5 postCard">
                    <Card.Body className="px-0">
                        <Row >
                            <Col md={2} className="p-0 m-0">
                                <img src="http://placehold.it/20x20" className="postProfilePic"/>
                            </Col>
                            <Col md={9} className="p-0 m-0 d-flex align-items-center justify-content-between"><p className="text-left p-0 m-0">{this.props.post.username}</p><BiDotsHorizontalRounded className="dot-icon"/></Col>
                        </Row>
                        <Card.Text className="text-left mt-3 px-1">
                           {this.props.post.text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="http://placehold.it/100x50" fluid />
                    <Card.Footer className="text-muted">
                        <Row>
                            <Col md={3} className="m-0 p-0">
                            <AiOutlineLike/>Like
                            </Col>
                            <Col md={3} className="m-0 p-0">
                            <RiMessageLine/>Comment
                            </Col>
                            <Col md={3} className="m-0 p-0">
                            <IoMdShareAlt/>Share
                            </Col>
                            <Col md={3} className="m-0 p-0">
                            <RiSendPlaneFill/>Send
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
              
                
            </div>
        )
    }
}
