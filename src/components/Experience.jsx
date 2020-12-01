import React from "react";
import "./Experience.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Container, Col, Media, ListGroup } from "react-bootstrap";
import { FaPlus, FaPen, FaAngleDown } from "react-icons/fa"

export default function Experience() {
  return (
    <div>

      <Container>
        <Card className="experience-container my-2">


          <Card.Body>
            <Col >
              <Row className="justify-content-between">
                <Col className="d-flex justify-content-start">
                  <Card.Title
                    classname="card-title-expereince d-flex justify-content-start"
                  >
                    Experience
              </Card.Title>
                </Col>

              </Row>
            </Col>
            <Col className="d-flex justify-content-end">
              <FaPlus />
            </Col>
            <Media>

              <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body  >
                <h5 className="d-flex">Job Title</h5><span className="d-flex justify-content-end mr-3"><FaPen /></span>
                <p className="d-flex">
                  Company Name
      </p>
                <p className="d-flex">
                  Since (Year) - Till (Year), Location
      </p>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body  >
                <h5 className="d-flex">Job Title</h5><span className="d-flex justify-content-end mr-3"><FaPen /></span>
                <p className="d-flex">
                  Company Name
      </p>
                <p className="d-flex">
                  Since (Year) - Till (Year), Location
      </p>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src="https://via.placeholder.com/90x90"
                alt="Generic placeholder"
              />
              <Media.Body  >
                <h5 className="d-flex">Job Title</h5><span className="d-flex justify-content-end mr-3"><FaPen /></span>
                <p className="d-flex">
                  Company Name
      </p>
                <p className="d-flex">
                  Since (Year) - Till (Year), Location
      </p>
              </Media.Body>
            </Media>

          </Card.Body>
          <ListGroup.Item action >
            Show more
      <FaAngleDown />
          </ListGroup.Item>
        </Card>
      </Container>
    </div>
  );
}