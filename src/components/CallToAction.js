import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

const CallToAction = ({ctaTitle, ctaText, ctaLinkOne, ctaLinkTwo}) => {  
  
  return (
    
      <div className="call-to-action">
          <Container>
            <Row>
                <Col md="6">
                    <h2>Try Moiety Web UI Kit Free</h2>
                </Col>
                <Col md="6">
                    <a className="btn btn-secondary" href={ctaLinkTwo}>Component List</a>
                    <a className="btn btn-primary" href={ctaLinkOne}>Try for Free</a>
                </Col>
            </Row>
          </Container>
      </div>

  );
}

export default CallToAction;
