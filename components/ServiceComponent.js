import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
        <Row>
          <Col xs={12} md={4}>
            <img src="assets/image-one.png" className="img-fluid service-img" />
            <h2>Best Offer In Town</h2>
            <p>
              we provide offers for people in Town.buy yours now 
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="assets/image-two.png" className="img-fluid service-img" />
            <h2>Fast Delivery</h2>
            <p>
            A hungry must not go to food the food will go to hungry.
            Get served as an emperor.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="assets/image-three.png"
              className="img-fluid service-img"
            />
            <h2>Quality Food</h2>
            <p>
            Health Requires Healthy Food.
             Eat good feel good.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;
