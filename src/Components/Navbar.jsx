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
            <Navbar.Brand to="#home">
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

              <Nav className="ml-auto">
                <Link to="/">
                  <div className="nav-link">
                    <AiFillHome className="icon m-0 p-0" />
                    <p>Home</p>
                  </div>
                </Link>
                <Nav.Link to="#" className="nav-link">
                  <FaUserFriends />
                  <p>My Network</p>
                </Nav.Link>
                <Nav.Link to="#" className="nav-link">
                  <BsFillBriefcaseFill />
                  <p>Jobs</p>
                </Nav.Link>
                <Nav.Link to="#" className="nav-link">
                  <RiMessage2Fill />
                  <p>Messaging</p>
                </Nav.Link>
                <Nav.Link to="#" className="nav-link">
                  <RiNotification3Fill />
                  <p>Notifications</p>
                </Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle
                    cssClass="e-caret-hide"
                    menuAlign="right"
                    variant="transparent"
                    to="#"
                    className="nav-link"
                  >
                    <img src={logo} className="profile-img" />
                    <p>
                      Me {" "}
                    </p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu >
                    <Dropdown.Item >
                      <Link to="/profile">
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
                      </Link>
                    </Dropdown.Item>
                    
                     
                    <Dropdown.Item to="#/action-3">
                      <Link  to="/profile" ><Button className="request-announce-button" style={{ width: "100%" }}>View Profile</Button></Link>
                    </Dropdown.Item>
                   
        
                    <Dropdown.Divider />
                    <Dropdown.Item to="#/action-3">
                      <b>Account</b>
                    </Dropdown.Item>
                    <Dropdown.Item to="#/action-3">
                      Access My Premium
                    </Dropdown.Item>
                    <Dropdown.Item to="#/action-3">
                      Settings & Privacy
                    </Dropdown.Item>
                    <Dropdown.Item to="#/action-3">Help</Dropdown.Item>
                    <Dropdown.Item to="#/action-3">Language</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item to="#/action-3">
                      <b>Manage</b>
                    </Dropdown.Item>
                    <Dropdown.Item to="#/action-3">
                      Posts & Acitivties
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item to="#/action-3">Sign Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Nav className="second-nav">
                
                 
                <Nav.Link to="#" className="nav-link">
                  <Dropdown>
                      <Dropdown.Toggle
                        cssClass="e-caret-hide"
                        menuAlign="right"
                        variant="transparent"
                        to="#"
                        className="nav-link"
                      >
                          <CgMenuGridR />
                          <p>
                            Work{" "}
                          
                          </p>
                      </Dropdown.Toggle>
                    </Dropdown>
                </Nav.Link>

                <Nav.Link
                  to="#"
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
