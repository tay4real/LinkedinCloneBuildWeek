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
                <Card.Img variant="top" src="http://placehold.it/100x20" className="profile-detail-image"/>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFQbLFj5Hs2kw/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=ZqwAjRdb3l6vw76BXdUMU2UT5D-bPni7LqbahbQVVc0" className="profile-detail-profile-pic mx-auto d-flex" />
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
