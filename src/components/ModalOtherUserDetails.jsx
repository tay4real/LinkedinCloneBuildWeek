import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./CreatePostComponent.css";
import OtherUserPriofileContainer from "./components/OtherUserProfileContainer";

export default class ModalOtherUsersDetail extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Email</Modal.Title>
          <p>{this.props.userProfile.email}</p>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      </Modal>
    );
  }
}
