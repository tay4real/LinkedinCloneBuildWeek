import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import '../styles/ProfileDetailsCard.css';

export default class ProfileDetailsCard extends Component {
    render() {
        return (
            <Card >
                <Card.Img variant="top" src="http://placehold.it/100x20" />
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFQbLFj5Hs2kw/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=ZqwAjRdb3l6vw76BXdUMU2UT5D-bPni7LqbahbQVVc0" className="profile-detail-profile-pic mx-auto d-flex" alt="" />
                <Card.Body>
                    <Card.Title>Simona Cossai</Card.Title>
                    <Card.Subtitle className=" text-muted">Web developer</Card.Subtitle>
                    <hr></hr>
                    <Card.Text className="d-flex justify-content-between small-text-profile-detail"><p>Who viewed your profile</p> <p className="little-blue-numbers-detail">151</p> </Card.Text>
                    <Card.Text className="d-flex justify-content-between small-text-profile-detail"><p>Views for the video </p> <p className="little-blue-numbers-detail">426</p></Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
