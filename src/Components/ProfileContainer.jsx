import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './Profile.css';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FaPencilAlt } from 'react-icons/fa';
import {AiFillEye} from 'react-icons/ai';
export default class ProfileContainer extends Component {
    render() {
        return (

            <Card>
                <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    className="coverImage image-fluid" />
                <Card.Body>
                    <img src="https://thispersondoesnotexist.com/image" className="profile-image" />
                    <div className="buttons">
                        <Button className="add-profile-button mr-2">Add profile section <RiArrowDownSFill className="m-0 p-0" style={{ fontSize: "17px" }} /></Button>
                        <Button className="more-button mr-1 py-0">More...</Button>
                        <Button className="pencil-edit-button"><FaPencilAlt /></Button>
                    </div>
                    <Card.Text className=" text-left text-black">
                        <h3>Simona Cossai</h3>
                        <h5>Web developer | blablablas</h5>
                    </Card.Text>
                    <Card.Text className=" text-left text-black d-flex">
                        <p className="p-0 m-0">Sant'Anastasia, Campania, Italy    • </p>
                        <a className="p-0 m-0 ml-2">500+ connections</a>
                        <p className="p-0 m-0 ml-2"> • </p>
                        <a className="p-0 m-0 ml-2">More info</a>
                    </Card.Text>
                </Card.Body>
                <Card className="mx-3 p-0 mb-2">
                    <Card.Header as="p" className="text-left p-1 m-0">Open to work
                    <p>Frontend web developer roles</p></Card.Header>
                    <Card.Body className="p-0 m-0">
                        <Card.Text className="p-0 m-0 d-flex align-items-center">
                           <AiFillEye className="p-0 my-0 text-black mx-2 d-flex align-items-center"/> <p className="p-0 m-0 text-left">Only recruiters</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card>
        )
    }
}
