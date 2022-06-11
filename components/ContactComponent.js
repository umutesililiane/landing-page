import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactComponent() {
  return (
    <div className="contact-container-bg">
      <Container className="contact-component">
        <Row>
          <Col xs={12} md={6}>
            <h1>FOODO</h1>
            <p>
            Best cooks and best delivery guys are all at your service
            </p>
            <div>
              <span className="fa fa-facebook-square"></span>
              <span className="fa fa-instagram"></span>
              <span className="fa fa-linkedin-square"></span>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>call us we will be there</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Company</b>
            <br />
            <br />
            <h6>Overview</h6>
            <h6>Social Media</h6>
            <h6>Contact</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;
