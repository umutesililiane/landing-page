import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/image-about.png" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div>
              <h2>Best Offer In Town</h2>
              <b>Need food and a good place to eat? Welcome to our humble place where you can eat good
                 food peacefully and get offers at a good price.”</b>
              <br />
              <br />
              <p>
                We see our customers as invited guests to a party, and we are the hosts.
                 It’s our job every day to make every important aspect of the
                  customer experience a little bit better
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
