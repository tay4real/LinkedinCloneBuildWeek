import React, { Component } from "react";
import {
  Navbar,
  Container,
  Form,
  Nav,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { RiNotification3Fill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import "../styles/Navbar.css";
import { Link, withRouter } from "react-router-dom";
import logo from "../assets/logo.png";
import { Divider } from "@material-ui/core";

class NavBar extends Component {
  state = {
    user: [],
  };
  getUserProfile = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        }),
      }
    );
    let user = await response.json();
    this.setState({ user });
  };

  componentDidMount() {
    this.getUserProfile();
  }
  render() {
    return (
      <>
        <Navbar
          variant="light"
          style={{ backgroundColor: "#fff" }}
          className="navbar p-0"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" className="nav-brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline>
                <InputGroup style={{ width: "240px" }}>
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ backgroundColor: "#EEF3F8", border: "none" }}
                    >
                      <HiSearch />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    style={{ backgroundColor: "#EEF3F8", border: "none" }}
                    type="text"
                    placeholder="Search"
                  />
                </InputGroup>
              </Form>

              <Nav className="ml-auto d-flex align-items-center">
                <Link to="/" >
                  <div className="nav-link pb-0 mb-0"><AiFillHome /><p>Home</p></div>
                </Link>
                <Link to="/" >
                  <div href="#" className="nav-link pb-0 mb-0">
                    <FaUserFriends />
                    <p>My Network</p>
                  </div>
                </Link>
                <Link to="/" >
                  <div href="#" className="nav-link pb-0 mb-0">
                    <BsFillBriefcaseFill />
                    <p>Jobs</p>
                  </div>
                </Link>
                <Link to="/">
                  <div href="#" className="nav-link pb-0 mb-0">
                    <RiMessage2Fill />
                    <p>Messaging</p>
                  </div>
                </Link>
                <Link to="/">
                  <div href="#" className="nav-link pb-0 mb-0">
                    <RiNotification3Fill />
                    <p>Notifications</p>
                  </div>
                </Link>
                <div href="#" className="nav-link pb-0 mb-0">
                <div className="d-flex m-0 p-0">  <img src={logo} className="profile-img mr-2" />
                    <p>
                      Me
                    </p></div>
                  </div>
                <Dropdown className="d-flex">
                  <Dropdown.Toggle
                    cssClass="e-caret-hide"
                    menuAlign="right"
                    variant="transparent"
                    href="#"
                    className="nav-link d-flex m-0 p-0"
                    style={{height:"10px", fontSize: "17px",marginTop:"10px", boxShadow: "none"}}
                  >
                  
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="px-2">
                    <Dropdown.Item href="/profile">
                      <img
                        width={10}
                        height={10}
                        className="align-self-left mr-2"
                        id="profile-image"
                        style={{ borderRadius: "50%" }}
                        src={this.state.user.image}
                        alt="Generic placeholder"
                      />
                      <b>
                        {this.state.user.name} {this.state.user.surname}
                      </b>
                    </Dropdown.Item>

                    <Button
                      className="request-announce-button"
                      style={{ width: "100%" }}
                      href="/profile"
                    >
                      View Profile
                    </Button>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                      <b>Account</b>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Access My Premium
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Settings & Privacy
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Language</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                      <b>Manage</b>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Posts & Acitivties
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Sing Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Nav className="second-nav">
                <Nav.Link href="#" className="nav-link">
                  <CgMenuGridR />
                  <p>
                    Work{" "}
                    <RiArrowDownSFill
                      className="m-0 p-0"
                      style={{ fontSize: "17px" }}
                    />
                  </p>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="nav-link"
                  style={{ maxWidth: "70px", textDecoration: "underline" }}
                >
                  <p style={{ color: "#5D3B09" }}>Reactivate premium</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default withRouter(NavBar);
