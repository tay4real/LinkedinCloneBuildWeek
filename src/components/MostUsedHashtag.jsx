import React, { Component } from 'react'
import '../styles/ProfileDetailsCard.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import {BsBookmarkFill} from 'react-icons/bs';
import '../styles/HashtagComponent.css';
import {AiOutlinePlus} from 'react-icons/ai';
export default class MostUsedHashtag extends Component {
    
    state={
        user: [],
    }
  
    render() {
        return (   
                <Card className="profile-detail-card mt-2 p-0">
                <Card.Body className="pb-2">
                    <Card.Subtitle className="text-left recent-hashtag">Recent</Card.Subtitle>
                    <p className="text-muted text-left m-0 pt-1 p-hashtag">#WebDeveloper</p>
                    <p className="text-muted text-left m-0 pt-1 p-hashtag">#Javascript</p>
                    <p className="text-muted text-left m-0 pt-1 p-hashtag">#OhGodWeMadeIt</p>
                    <Card.Subtitle className="text-left followed-hashtag mb-2 mt-3">Groups</Card.Subtitle>

                    <Card.Subtitle className="text-left followed-hashtag mt-2 mb-3 d-flex justify-content-between">Events <AiOutlinePlus /></Card.Subtitle>
                    <Card.Subtitle className="text-left followed-hashtag mt-1">Followed hashtag</Card.Subtitle>
                    <p className="text-muted text-left m-0 pt-1 p-hashtag">#ReactJs</p>
                    <p className="text-muted text-left m-0 pt-1 p-hashtag">#DartCommunity</p>
                    <p className="text-muted text-left m-0 pt-1 p-hashtag mb-2">#IReallyDontKnow</p>
                    <Card.Footer className=" pt-1 p-0 text-left card-footer-text "><BsBookmarkFill className="mr-2"/>Saved</Card.Footer>
                </Card.Body>
            </Card>
        )
    }
}
