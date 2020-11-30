import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import './Profile.css';
export default class ProfileContainer extends Component {
    render() {
        return (

            <Card>
                <Card.Img variant="top"
                    src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    width="180" height="150px" />
                <Card.Body>
                    <img src="https://thispersondoesnotexist.com/image" className="profile-image"/>
                    <Card.Text className="mt-5">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
