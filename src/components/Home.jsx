import React, { Component } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import CreatePostComponent from './CreatePostComponent';
import SinglePost from './SinglePost';
import AnnounceCard from './AnnounceCard';
import ProfileDetailsCard from './ProfileDetailsCard';
export default class Home extends Component {
    state={
        posts:[],
    }
    getPost = async (e) => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/',
                {
                    method: 'GET',
                    headers: new Headers({
                        "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    })
                })
            if (response.ok) {
                let posts= await response.json();
                this.setState({posts})
                console.log(posts);
            } else {
                console.log('an error occurred')
                let error = await response.json()
            }
        } catch (e) {
            console.log(e) 
        }
    }
    componentDidMount(){
        this.getPost()
    }
    render() {
        return (
            <>
             <Container className="mx-auto justify-content-center  text-center d-block mb-5">
                 <Row className="mx-auto mt-5 justify-content-center text-center ">
            <Col md={3} >
                <ProfileDetailsCard/>
            </Col>
            <Col md={6} >
            <CreatePostComponent />
            {this.state.posts && 
            this.state.posts.map((element) => (
            <SinglePost post={element}/>
            ))}
            </Col >
            <Col md={3} >
            <AnnounceCard/>
            <AnnounceCard/>
            <AnnounceCard/>


            </Col>

                 </Row>
             </Container>
            </>
        )
    }
}
