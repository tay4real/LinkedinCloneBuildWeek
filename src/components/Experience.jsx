import React, { useState, useEffect } from "react";
import "./Experience.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Row,
  Container,
  Col,
  Media,
  ListGroup,
  Button,
  Modal,
} from "react-bootstrap";
import { FaPlus, FaPen, FaAngleDown } from "react-icons/fa";
import Backoffice from "./Backoffice";
import SingleExperience from "./SingleExperience";

export default function Experience() {
  const [show, setShow] = useState(false);
  const [experience, setExperience] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getExperience = async () => {
    let respons = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${process.env.REACT_APP_USER_ID}/experiences`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        }),
      }
    );
    let responseExperience = await respons.json();

    return responseExperience;
  };

  useEffect(() => {
    getExperience().then((data) => {
      setExperience(data);
    });
  }, []);

  console.log(experience);
  return (
    <div>
      <Card className="experience-container my-2">
        <Card.Body>
          <Row className="justify-content-between">
            <Col className="d-flex justify-content-start">
              <Card.Title classname="card-title-expereince d-flex justify-content-start">
                Experience
              </Card.Title>
            </Col>
            <Col className="d-flex justify-content-end">
              <FaPlus onClick={handleShow} />
            </Col>
          </Row>

          {experience &&
            experience.map((element) => (
              <SingleExperience experience={element} />
            ))}
        </Card.Body>
        <ListGroup.Item action>
          Show more
          <FaAngleDown />
        </ListGroup.Item>
      </Card>
      <Backoffice show={show} onHide={handleClose} getExperience={getExperience}/>
    </div>
  );
}
