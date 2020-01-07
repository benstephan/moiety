import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

const ContentBlock = ({contentTopTitle, contentSubTitle, contentText, contentLink, contentImage, order}) => {  

  return (
    <div className="content-block">
      <Container>
      <div className="row">
        <div className="col-md-5">
          <img src={contentImage} alt={contentTopTitle + contentSubTitle} className="img-fluid" />
        </div>
        <div className="col-md-7 align-self-center">
          <h2>{contentTopTitle}<br /><span>{contentSubTitle}</span></h2>
          <p>{contentText}</p>
          <a className="btn btn-primary" href={contentLink}>Learn More</a>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default ContentBlock;
