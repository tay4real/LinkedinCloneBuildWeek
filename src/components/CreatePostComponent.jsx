import React, { Component } from 'react'
import { Card, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { IoCreateOutline } from 'react-icons/io5';
import {HiPhotograph} from 'react-icons/hi';
import {MdVideoLibrary} from 'react-icons/md';
import {RiCalendarEventFill} from 'react-icons/ri';
import {RiArticleLine} from 'react-icons/ri';
import "../styles/CreatePostComponent.css"
import NewPostModal from './NewPostModal';

export default class CreatePostComponent extends Component {
    state = {
        open: true,
        show: false,
      }

      handleClose = () => {
        this.setState({show:false});
        this.props.fetch();
      }
     handleShow = () =>{
         this.setState({show: true});
     }
    render() {
        return (
            <div>
                <Card body style={{borderRadius:"16px", padding:"0"}}>
                    <InputGroup >
                        <InputGroup.Prepend>
                            <InputGroup.Text className="iconInputPost">
                                <IoCreateOutline style={{fontSize: "22px", padding: "0", margin: "0"}}/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            onClick={this.handleShow}
                            style={{boxShadow: "none"}}
                            className="postInput"
                            type="text"
                            placeholder="Start a post"
                        />
                    </InputGroup>
                    <Row className="mx-0 mt-3 mb-0 p-0 postInputIcons justify-content-center text-center align-items-center d-flex">
                    <Col className="d-flex">
                    <HiPhotograph className="photo"/>
                    Photo
                    </Col>
                    <Col className="d-flex">
                    <MdVideoLibrary className="video"/>
                    Video
                    </Col>
                    <Col className="d-flex">
                    <RiCalendarEventFill className="calendar"/>
                    Event
                    </Col>
                    <Col className="d-flex">
                    <RiArticleLine className="article"/>
                    Write
                    </Col>
                    </Row>
                </Card>
                <NewPostModal show={this.state.show} fetch={this.props.fetch} onHide={this.handleClose} />
               
            </div>
        )
    }
}
