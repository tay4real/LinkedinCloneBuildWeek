import React, { Component } from 'react'
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import './SinglePost.css';
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import {AiOutlineLike} from 'react-icons/ai';
import {RiMessageLine} from 'react-icons/ri';
import {IoMdShareAlt} from 'react-icons/io';
import {RiSendPlaneFill} from 'react-icons/ri';
import {BsPencilSquare} from 'react-icons/bs';
import NewPostModal from './NewPostModal';
export default class SinglePost extends Component {
    state = {
        open: true,
        show: false,
        id: "",
      }

      handleClose = () => {
        this.setState({show:false});
      }
     handleShow = (id) =>{
         this.setState({show: true});
     }
   
    handleDelete=async(id)=>{
        let response= await fetch("https://striveschool-api.herokuapp.com/api/posts/"+id,{       
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                },        
        })
        if(response.ok){
            alert("deleted successfully");
            this.props.fetch();
        }

    }
   

    render() {
        return (
            <div>
                <Card className="d-block mt-3 postCard" key={this.props.post._id}>
                    <Card.Body className="px-0">
                        <Row >
                            <Col md={2} className="p-0 m-0 ml-2">
                                <img src="http://placehold.it/20x20" className="postProfilePic" />
                            </Col>
                            <Col md={9} className="p-0 m-0 d-flex align-items-center justify-content-between">
                                <p className="text-left p-0 m-0">{this.props.post.username}</p>
                                {this.props.post.username===process.env.REACT_APP_USER_NAME ?
                            <BsPencilSquare onClick={()=>this.handleDelete(this.props.post._id)}/> :<BiDotsHorizontalRounded className="dot-icon"/>
                            }</Col>
                        </Row>
                        <Card.Text className="text-left mt-3 px-1">
                           {this.props.post.text}
                        </Card.Text>
                    </Card.Body>
                    {this.props.post.image && <Card.Img variant="bottom" src={this.props.post.image} fluid />}
                    <Card.Footer className="text-muted">
                        <Row>
                            <Col md={3} className="m-0 p-0" onClick={()=> this.getID(this.props.post._id)}>
                            <AiOutlineLike/>Like
                            </Col>
                            <Col md={3} className="m-0 p-0">
                            <RiMessageLine/>Comment
                            </Col>
                            <Col md={3} className="m-0 p-0">
                            <IoMdShareAlt/>Share
                            </Col>
                            <Col md={3} className="m-0 p-0">
                            <RiSendPlaneFill/>Send
                            </Col>
                        </Row>
                    </Card.Footer>
                     <NewPostModal show={this.state.show} onHide={this.handleClose} fetch={this.props.fetch}/>
                </Card>    
            </div>
        )
    }
}