import React, { Component } from 'react'
import { Modal, Button, Form, Col,  InputGroup, FormControl } from 'react-bootstrap';
require('dotenv').config()

export default class Experience_Modal extends Component {
    state = {
        experience: {
            role: "",
            company: "",
            startDate: "",
            endDate: "", //could be null
            description: "",
            area: "",
        },
        user_id : "",
        delete: false,
        update: false,
        add: false,
        working: false
    }

   
   
    
    url = `https://striveschool-api.herokuapp.com/api/profile/${process.env.REACT_APP_USER_ID}/experiences`

    updateField = (e) => {
        let experience = { ...this.state.experience } 
        let currentId = e.currentTarget.id 
        experience[currentId] = e.currentTarget.value 
        this.setState({experience})
    }

    handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        let response = await fetch(this.url,{
            method: "POST",
            headers: new Headers({
                "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(this.state.experience),
            })
            if(response.ok){
                alert("Experience Added");
            }else{
                alert("Something went wrong!");
            }
        }catch(error){
            alert(`Something went wrong! ${error}`)
        }
    }

    handleUpdate=async(e)=>{
        e.preventDefault();
        try{
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${process.env.REACT_APP_USER_ID}/experiences`,{
            method: "PUT",
            headers: new Headers({
                "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(this.state.experience),
            })
            if(response.ok){
                alert("Experience Updated");
            }else{
                alert("Something went wrong!");
            }
        
        }catch(error){
            alert(`Something went wrong! ${error}`)
        }
    }

    handleDelete=async(e)=>{
        e.preventDefault();
        e.preventDefault();
        try{
        let response = await fetch(this.url,{
                method: "DELETE",
                headers: new Headers({
                    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    "Content-Type": "application/json",
                })
            });
            if(response.ok){
                alert("Experience Deleted");
            }
            else{
                alert("Something went wrong!")
            }
        }catch(error){
            alert(`Something went wrong! ${error}`)
        }
    }
    
    render() {
        
        return (
            <div>
                <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        {this.props.add && <Modal.Title>Add experience</Modal.Title>}
                        {this.props.edit && <Modal.Title>Edit experience</Modal.Title>}
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}  >
                        <Modal.Body style={{overflowY: "scroll", maxHeight: "60vh"}}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label htmlFor="role">Title *</Form.Label>
                                    <Form.Control type="text" id="role" placeholder="Ex: Retails Sales Manager" 
                                    value={this.state.experience.role}
                                    onChange={this.updateField}/>
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmpType">
                                    <Form.Label htmlFor="">
                                        Employment Type
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="role"
                                        id=""
                                        value={""}
                                        onChange={""}
                                    >
                                        <option>-</option>
                                        <option>Full-time</option>
                                        <option>Part-time</option>
                                        <option>Self-employed</option>
                                        <option>Freelance</option>
                                        <option>Contract</option>
                                        <option>Internship</option>
                                        <option>Apprenticeship</option>
                                        <option>Seasonal</option>
                                    </Form.Control>
                                    <span>Country-specific employment types</span>
                                    <span>Learn more</span>
                                </Form.Group>              
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}  controlId="formGridCompany">
                                    <Form.Label  htmlFor="company">Company *</Form.Label>
                                    <Form.Control id="company" type="text" placeholder="Enter the company"
                                            value={this.state.experience.company}
                                            onChange={this.updateField} />
                                    <span></span>
                                </Form.Group>
                            </Form.Row>
                 
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridLocation">
                                    <Form.Label  htmlFor="area">Location</Form.Label>
                                    <Form.Control id="area" type="text" placeholder="Ex: London, United Kingdom" 
                                    value={this.state.experience.area}
                                    onChange={this.updateField}/>
                                    <span></span>
                                </Form.Group>       
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as= {Col} controlId="formGridCurrentlyWorking" md={12} className="flex flex-column align-self-end">
                                    <Form.Label>
                                        <Form.Check
                                            type="checkbox"
                                            id="working"
                                            label="I am currently working in this role"
                                            checked={this.state.working}
                                            onChange={this.updateField}
                                        />
                                    </Form.Label>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as ={Col} md={6}>
                                    <Form.Label>Start Date *</Form.Label>
                                  
                                    <Form.Control
                                        type="datetime-local"
                                        name="dateTime"
                                        id="startDate"
                                        placeholder="Date and Time"
                                        value={this.state.experience.startDate}
                                        onChange={this.updateField}  
                                    />
                                </Form.Group>
                                <Form.Group as ={Col} md={6}>
                                    <Form.Label>End Date *</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="dateTime"
                                        id="endDate"
                                        placeholder="Date and Time"
                                        value={this.state.experience.endDate}
                                        onChange={this.updateField} 
                                    />
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                    <Form.Group as={Col} controlId="formGridDescription">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control id="description"  as="textarea" rows={3} value={this.state.experience.description} onChange={this.updateField} />
                                    </Form.Group>        
                            </Form.Row>
   
                            <Form.Row>

                                    <Form.Group as={Col} controlId="formGridDescription">
                                        <Form.Label><span>Media</span><br/> 
Add or link to external documents, photos, sites, videos, and presentations.</Form.Label>
                                       <Form.Row>
                                           <Form.Group as={Col}>
                                               
                                                <Form.File.Input className="btn" variant="primary" block className="rounded-pill" onClick="" />
                                           </Form.Group>
                                           <Form.Group as={Col}>
                                                <Button variant="outline-primary"   className="rounded-pill" block onClick="" >
                                                    Link
                                                </Button>
                                           </Form.Group>
                                           
                                       </Form.Row>
                                       <Form.Row>
                                            <Form.Group as={Col}>
                                                <InputGroup className="mb-3">
                                                    <FormControl
                                                    placeholder="Paste or type a link to add a file or video"
                                                    aria-label="imgLink"
                                                    aria-describedby="imgLink"
                                                    />
                                                    <InputGroup.Append>
                                                    <Button variant="outline-secondary">Add</Button>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Form.Group>
                                       </Form.Row>
                                    </Form.Group>        
                            </Form.Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Form.Row className="justify-content-bewteen">
                                {this.props.edit && <><Form.Group as = {Col} md={6} >
                                    <Button variant="outline-secondary" className="rounded-pill"  >
                                        Delete
                                    </Button>
                                </Form.Group> <Form.Group as = {Col} md={6} >
                                    <Button variant="primary" type="submit"  className="rounded-pill">
                                        Save
                                    </Button>
                                </Form.Group> </>}
                                {this.props.add  && <> <Form.Group as = {Col} md={6} >
                                    <Button variant="primary" type="submit"  className="rounded-pill">
                                        Save
                                    </Button>
                                </Form.Group> </>}
                            </Form.Row>
                            
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}
