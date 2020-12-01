import React, { Component } from 'react'
import { Card, Button, ButtonGroup, Media } from 'react-bootstrap';
import {BsBookmarkFill} from 'react-icons/bs';
import './Dashboard.css';
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Card className="mt-4 dashboard">
                    <Card.Body>
                        <Card.Title className="text-left m-0 p-0">Your Dashboard</Card.Title>
                        <Card.Text className="text-left m-0 p-0">
                            Private to you
                        </Card.Text>
                        <ButtonGroup aria-label="Basic example" className="dashboard-buttons mt-2">
                            <Button variant="secondary" className="dashboard-button">
                                <p className="m-0 p-0 dashboard-number text-left">150</p>
                                <p className="m-0 p-0 text-left">Who viewed your profile</p>
                            </Button>
                            <Button variant="secondary" className="dashboard-button">
                                <p className="m-0 p-0 dashboard-number text-left">519</p>
                                <p className="m-0 p-0 text-left">Video Views</p>
                            </Button>
                            <Button variant="secondary" className="dashboard-button">
                                <p className="m-0 p-0 dashboard-number text-left">65</p>
                                <p className="m-0 p-0 text-left">Search appearance</p>
                            </Button>
                        </ButtonGroup>
                        <Card className="mt-2 dashboard-card">
                        <Media className="p-2">
                           <BsBookmarkFill className="mt-1 mr-2"/>
                            <Media.Body>
                                <h6 className="text-left">My items</h6>
                                <p className="m-0 p-0 text-left">
                                Keep track of your jobs, courses and articles
                                </p>
                            </Media.Body>
                        </Media>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
