import React, { Component } from 'react'
import { Card, Container, Row, Col, Button, Spinner,Modal,Form } from 'react-bootstrap';
import './SinglePost.css';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { RiMessageLine } from 'react-icons/ri';
import { IoMdShareAlt } from 'react-icons/io';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import NewPostModal from './NewPostModal';
export default class SinglePost extends Component {
    state = {
        open: true,
        show: false,
        id: "",
        post:{
            text:"",
        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = (id) => {
        this.setState({ show: true });
        if(id){
            this.setState({post:{text: id}})
        }
    }

    handleDelete = async (id) => {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
        })
        if (response.ok) {
            alert("deleted successfully");
            this.props.fetch();
        }

    }
    handleUpdate= async(id)=>{
        try {
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/posts/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(this.state.post),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                this.setState({
                    post: { text: "" },
                });
                this.props.fetch()
            } else {
                let error = await response.json();
                console.log(error);
            }
        } catch (e) {
            console.log(e);
        }
    }


    updatePostField = (e) => {
        this.setState({  post: { text: e.target.value } });
    };


    render() {
        return (
            <div>
                <Card className="d-block mt-3 postCard" key={this.props.post._id}>
                    <Card.Body className="px-0">
                        <Row >
                            <Col md={2} className="p-0 m-0 ml-2">
                                <img src={this.props.post.user.image} className="postProfilePic" />
                            </Col>
                            <Col md={9} className="p-0 m-0 d-flex align-items-center justify-content-between">
                                <p className="text-left p-0 m-0">{this.props.post.username}</p>
                                {this.props.post.username === process.env.REACT_APP_USER_NAME ?
                                    <BsPencilSquare onClick={() => this.handleShow(this.props.post.text)} /> : <BiDotsHorizontalRounded className="dot-icon" />
                                }</Col>
                        </Row>
                        <Card.Text className="text-left mt-3 px-1">
                            {this.props.post.text}
                        </Card.Text>
                    </Card.Body>
                    {this.props.post.image && <Card.Img variant="bottom" src={this.props.post.image} />}
                    <Card.Footer className="text-muted">
                        <Row>
                            <Col md={3} className="m-0 p-0" >
                                <AiOutlineLike />Like
                            </Col>
                            <Col md={3} className="m-0 p-0">
                                <RiMessageLine />Comment
                            </Col>
                            <Col md={3} className="m-0 p-0">
                                <IoMdShareAlt />Share
                            </Col>
                            <Col md={3} className="m-0 p-0">
                                <RiSendPlaneFill />Send
                            </Col>
                        </Row>
                    </Card.Footer>
                    <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.props.post._id}
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="what do you want to talk about?"
                                    style={{ border: "none" }}
                                    value={this.state.post.text}
                                    id="text"
                                    onChange={(e) => this.updatePostField(e)}
                                />
                            </Form.Group>
                        </Form></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={()=>this.handleUpdate(this.props.post._id)}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card>
            </div>
        )
    }
}