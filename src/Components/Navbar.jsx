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
import logo from "./../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { RiNotification3Fill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import "./Navbar.css";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
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

              <Nav className="ml-auto">
                <Link to="/">
                  <div className="nav-link">
                    <AiFillHome className="icon m-0 p-0" />
                    <p>Home</p>
                  </div>
                </Link>
                <Nav.Link href="#" className="nav-link">
                  <FaUserFriends />
                  <p>My Network</p>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <BsFillBriefcaseFill />
                  <p>Jobs</p>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <RiMessage2Fill />
                  <p>Messaging</p>
                </Nav.Link>
                <Nav.Link href="#" className="nav-link">
                  <RiNotification3Fill />
                  <p>Notifications</p>
                </Nav.Link>
                <Link to="/profile">
                  <Dropdown>
                    <Dropdown.Toggle
                      menuAlign="right"
                      variant="transparent"
                      href="#"
                      className="nav-link"
                    >
                      <img src={logo} className="profile-img" />
                      <p>
                        Me{" "}
                        <RiArrowDownSFill
                          className="m-0 p-0"
                          style={{ fontSize: "17px" }}
                        />
                      </p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <img
                          width={30}
                          height={30}
                          className="align-self-center mr-3"
                          style={{ borderRadius: "50%" }}
                          src="https://via.placeholder.com/30x30"
                          alt="Generic placeholder"
                        />
                        <b>
                          First name Last Name
                          {/* {this.props.userProfile.name} */}
                          {/* {this.props.userProfile.surname ?? "surname"} */}
                        </b>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <b>Student</b>
                      </Dropdown.Item>
                      <Button
                        className="request-announce-button"
                        style={{ width: "100%" }}
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

                  {/* <div href="#" className="nav-link"><img src={logo} className="profile-img" /><p>Me <RiArrowDownSFill className="m-0 p-0" style={{ fontSize: "17px" }} /></p></div> */}
                </Link>
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
