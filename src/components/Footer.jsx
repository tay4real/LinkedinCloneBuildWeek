import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "../styles/Footer.css"


function Footer() {
  return (

    <>

        <Container className="containers mt-5 d-flex justify-content-center text-center p-0">
          <img src="/LI-Logo.png" className="mt-4 mr-5 " />
          <Row className="mt-4 justify-content-center text-center d-flex">
            <div className="d-flex">
              <Col xs={2}>
                <div className="d-flex flex-column text-left">
                  <a href="/">About</a>
                  <a href="/">Community Guidelines</a>
                  <Dropdown>
                    <Dropdown.Toggle id="privacy" className="p-0 m-0">
                      Privacy & Terms
                  </Dropdown.Toggle>
                    <Dropdown.Menu id="privacyItems">
                      <Dropdown.Item href="/">Privacy policy</Dropdown.Item>
                      <Dropdown.Item href="/">User Agreement</Dropdown.Item>
                      <Dropdown.Item href="/">Cookie Policy</Dropdown.Item>
                      <Dropdown.Item href="/">Copyright Policy</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <a href="/">Sales Solutions</a>
                  <a href="/">Safety Center</a>
                </div>
              </Col>
              <Col xs={2}>
                <div className="d-flex flex-column text-left">
                  <a href="/">Accessibility</a>
                  <a href="/">Careers</a>
                  <a href="/">Ad Choices</a>
                  <a href="/">Mobile</a>
                </div>
              </Col>
              <Col xs={2}>
                <div className="d-flex flex-column text-left">
                  <a href="/">Talent Solutions</a>
                  <a href="/">Marketing Solutions</a>
                  <a href="/">Advertising</a>
                  <a href="/">Small Business</a>
                </div>
              </Col>
              <Col xs={3}>
                <div className="d-flex flex-column text-left">
                  <a href="/">
                    Questions? </a>
                  <p><small>Visit our Help Center.</small></p>

                  <a href="/">
                    Manage your account and privacy </a>
                  <p><small>Go to your Settings.</small></p>

                </div>
              </Col>
              <Col xs={3}>
                <div className="d-flex flex-column text-left">
                  <label>Select Language</label>
                  <select>
                    <option>
                      English (english)
                    </option>
                  </select>
                  <p className="ml-2 mt-2" id>LinkedIn Corporation © 2020</p>
                </div>
              </Col>
            </div>
          </Row>
        </Container>

    </>
  );
}

export default Footer;
