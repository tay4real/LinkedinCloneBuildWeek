import React, { Component } from "react";
import Moment from "react-moment";
import { Media } from "react-bootstrap";
import { FaPen } from "react-icons/fa";

import { Link } from "react-router-dom";

export default class SingeExperience extends Component {
  state = {
    experience: this.props.experience,
  };


  render() {
    
    return (
      <>
      <Media className="mt-2">
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src="https://via.placeholder.com/90x90"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="d-flex">{this.props.experience.role}</h5>
          <Link to={"/profile/edit/position/" + this.props.experience._id}><span className="d-flex justify-content-end mr-3">
            <FaPen onClick={this.props.onClick} />
          </span></Link>
          <p className="d-flex">{this.props.experience.company}</p>
          <p className="d-flex">
            Since:
            <Moment
              date={this.props.experience.startDate}
              format="YYYY/MM/DD"
            />{" "}
            Till:
            <Moment date={this.props.experience.endDate} format="YYYY/MM/DD" />
          </p>
        </Media.Body>
      </Media>
      
      </>
    );
  }
}