import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

const GalleryBox = ({galleryLink, gallerySrc, galleryName, galleryTitle}) => {  
  
  return (
    <Col md="4">
      <div className="gallery-box">
      <a href={galleryLink}>
        <img src={gallerySrc} />
        <span className="name">{galleryName} 
          <span className="title">{galleryTitle}</span>
          <button className="btn btn-primary">Learn More</button>
        </span>
      </a>
      </div>
    </Col>
  );
}

export default GalleryBox;
