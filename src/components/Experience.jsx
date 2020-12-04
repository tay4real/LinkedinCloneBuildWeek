import React, { Component} from "react";
import "../styles/Experience.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import { FaPlus, FaPen, FaAngleDown } from "react-icons/fa";
import Experience_Modal from "./Experience_Modal";
import SingleExperience from "./SingleExperience";

class Experience extends Component {
  state = {
    show: false,
    experience: [],
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  getExperience = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${process.env.REACT_APP_USER_ID}/experiences`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          }),
        }
      );
      if (response.ok) {
        let responseExperience = await response.json();
        this.setState({ experience: responseExperience });
        console.log(responseExperience);
      }
    } catch (e) {}
  };

  componentDidMount() {
    this.getExperience();
  }



  render() {
    console.log(this.state.experience);
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
                <FaPlus onClick={this.handleShow} />
              </Col>
            </Row>

            {this.state.experience &&
              this.state.experience.map((element) => (
                <SingleExperience experience={element} />
              ))}
          </Card.Body>
          <ListGroup.Item action className="text-center ">
            Show more
            <FaAngleDown />
          </ListGroup.Item>
        </Card>
        <Experience_Modal show={this.state.show} onHide={this.handleClose} />
      </div>
    );
  }
}

export default Experience;
