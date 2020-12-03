import React from "react";
import "./Interests.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Button, Col, Media, ListGroup } from "react-bootstrap";
import { FaPlus, FaInfoCircle, FaAngleDown } from "react-icons/fa";
import { IconName } from "react-icons/fa";

export default function Interests() {
  return (
    <Card
      className="interests-container my-2"
      style={{ width: "20rem", borderRadius: "12px" }}
      className="pb-2 mb-3"
    >
      <Card.Body>
        <Row className="justify-content-between">
          <Col>
            <Col className="d-flex justify-content-start">
              <Card.Title classname="card-title-expereince d-flex justify-content-start">
                Add to your feed
              </Card.Title>
              <Col>
                <FaInfoCircle />
              </Col>
            </Col>
          </Col>

          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                style={{ borderRadius: "50%" }}
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Name</h5>
                <p className="d-flex" style={{ textAlign: "left" }}>
                  <small>Computers Software </small>
                  <Button className="request-announce-button">Follow</Button>
                </p>
              </Media.Body>
            </Media>
            <br />
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                style={{ borderRadius: "50%" }}
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Name</h5>
                <p className="d-flex" style={{ textAlign: "left" }}>
                  <small>Computers Software </small>
                  <Button className="request-announce-button">Follow</Button>
                </p>
              </Media.Body>
            </Media>
            <br />
          </Col>

          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="align-self-center mr-3"
                style={{ borderRadius: "50%" }}
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="d-flex">Name</h5>
                <p className="d-flex" style={{ textAlign: "left" }}>
                  <small>Computers Software </small>
                  <Button className="request-announce-button">Follow</Button>
                </p>
              </Media.Body>
            </Media>
            <br />
          </Col>
        </Row>
      </Card.Body>
      <ListGroup.Item action>
        Wiew all recommendations
        <FaAngleDown />
      </ListGroup.Item>
    </Card>
  );
}
