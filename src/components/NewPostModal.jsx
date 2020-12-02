import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import './CreatePostComponent.css';
import { BiWorld } from 'react-icons/bi';
export default class NewPostModal extends Component {
    state={
        post:{
        text:"",
    }
}

    updatePostField = (e) => {
        let post = { ...this.state.post} 
        let currentId = e.currentTarget.id 
        post[currentId] = e.currentTarget.value 
        this.setState({post})
    }

    submitPost = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.post),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    })
                })
            if (response.ok) {
                alert('POST PUBLISHED!')
                this.setState({
                   post: {
                       text:''
                    },
                })
            } else {
                console.log('an error occurred')
                let error = await response.json()
            }
        } catch (e) {
            console.log(e) 
        }
    }


    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6} className="d-flex">
                                <img className="profile-picture-modal" src="https://media-exp1.licdn.com/dms/image/C4D03AQFQbLFj5Hs2kw/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=ZqwAjRdb3l6vw76BXdUMU2UT5D-bPni7LqbahbQVVc0" />
                                <div className="d-block"><p className="ml-3 text-black m-0 p-0">Simona Cossai</p>
                                    <Form.Control as="select" custom className="postSelect ml-2 py-0">
                                        <option>🌏Everyone</option>
                                        <option>Your network</option>
                                        <option>only me</option>
                                    </Form.Control>
                                </div>
                            </Col>
                        </Row>
                        <Form onSubmit={this.submitPost}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" 
                                placeholder="What do you want to talk about?"
                                className="textAreaPost"
                                id="text"
                                value={this.state.post.text}
                                onChange={this.updatePostField}
                                rows={3} />
                            </Form.Group>
                            <Button type="submit" className="post-modal-button justify-content-right d-flex ml-auto ">Post</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

