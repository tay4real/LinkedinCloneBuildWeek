import React, { Component } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './ProfileDetailsCard.css';
import {BsBookmarkFill} from 'react-icons/bs';

export default class ProfileDetailsCard extends Component {
    
    state={
        user: [],
    }
    getUserProfile=async()=>{
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me",{
            "method": "GET", 
            "headers": new Headers({
                "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`
            })
        })
        let user = await response.json();
        this.setState({user});
    }


    componentDidMount(){
        this.getUserProfile();
    }
    render() {
        return (   
                <Card className="profile-detail-card">
                <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E16AQFGvXwGqrpN7w/profile-displaybackgroundimage-shrink_350_1400/0/1602886552408?e=1612396800&v=beta&t=OgyPkQ41f4wnIJJ0SWmEY4caxBbVbzSd_o0i7MplkFk" className="profile-detail-image"/>
                <img src={this.state.user.image} className="profile-detail-profile-pic mx-auto d-flex" />
                <Card.Body>
                    <Card.Title>{this.state.user.username ?? "Username"}</Card.Title>
                    <Card.Subtitle className=" text-muted">{this.state.user.title ?? "Web Developer"}</Card.Subtitle>
                    <hr></hr>
                    <Card.Text className="d-flex justify-content-between small-text-profile-detail"><p>Who viewed your profile</p> <p className="little-blue-numbers-detail">151</p> </Card.Text>
                    <Card.Text className="d-flex justify-content-between small-text-profile-detail"><p>Views for the video </p> <p className="little-blue-numbers-detail">426</p></Card.Text>
                    <Card.Footer className="pt-2 p-0 text-left card-footer-text "><BsBookmarkFill className="mr-2"/>My items</Card.Footer>
                </Card.Body>
            </Card>
        )
    }
}
