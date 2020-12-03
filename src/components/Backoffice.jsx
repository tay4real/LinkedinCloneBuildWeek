import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
require('dotenv').config()

export default class Backoffice extends Component {
    state = {
        experience:{
        role: "",
        company: "",
        startDate: "",
        endDate: "", //could be null
        description: "",
        area: "",
        },
        user_experience : []
    }
    updateField = (e) => {
        let experience = { ...this.state.experience } 
        let currentId = e.currentTarget.id 
        experience[currentId] = e.currentTarget.value 
        this.setState({experience})
    }


    handleSubmit=async(e)=>{
        e.preventDefault();
    try{
       let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${process.env.REACT_APP_USER_ID}/experiences`,{
           method: "POST",
           headers: new Headers({
            "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            "Content-Type": "application/json",
           }),
           body: JSON.stringify(this.state.experience),
        })
    alert("Experience Added");
    }catch(e){
        console.log(e);
    }
    }
    render() {
        console.log(process.env.REACT_APP_USER_ID);
        

        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add experience</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}  className="py-2 px-4">
                        <Form.Group>
                            <Form.Label htmlFor="role">Role</Form.Label>
                            <Form.Control type="text" id="role" placeholder="Enter the role" 
                             value={this.state.experience.role}
                             onChange={this.updateField}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label  htmlFor="company">Company</Form.Label>
                            <Form.Control id="company" type="text" placeholder="Enter the company"
                             value={this.state.experience.company}
                             onChange={this.updateField} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label  htmlFor="description">Description</Form.Label>
                            <Form.Control id="description" type="text" placeholder="What did you do during this time?" 
                             value={this.state.experience.description}
                             onChange={this.updateField}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label  htmlFor="area">Area</Form.Label>
                            <Form.Control id="area" type="text" placeholder="Enter where you worked"  
                            value={this.state.experience.area}
                                    onChange={this.updateField}/>
                        </Form.Group>
                        <Form.Group>
                                <Form.Label htmlFor="startDate">Starting date</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="dateTime"
                                    id="startDate"
                                    placeholder="Date and Time"
                                    value={this.state.experience.startDate}
                                    onChange={this.updateField}
                                    
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="endDate">endDate</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="dateTime"
                                    id="endDate"
                                    placeholder="Date and Time"
                                    value={this.state.experience.endDate}
                                    onChange={this.updateField}
                                    
                                />
                            </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal>
            </div>
        )
    }
}
