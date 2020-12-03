import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Description from "./Description";
import ImageContainer from "./ImageContainer";
import Title from "./Title";
import { CgUserAdd } from "react-icons/cg";

export default class SideCard extends Component {
  state = {};

  render() {
    return (
      <Row className="py-2 pl-1">
        <Col md={3}>
          <ImageContainer imgSrc={this.props.imgSrc} />
        </Col>
        <Col md={9}>
          <Row className="justify-content-center align-items-center border-bottom border-secondary p-0 m-0">
            <Col md={10}>
              <Title title={this.props.title} />
              <Description description={this.props.description} />
            </Col>
            <Col md={2}>
              <span
                className="border border-secondary rounded-circle d-flex p-0 mr-5"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              >
                <CgUserAdd className="m-auto" />
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
