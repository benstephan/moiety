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

const FeaturedBlock = ({featuredIcon, featuredTitle, featuredText, featuredLink}) => {  

  return (
    <Col>
    <div className="featured-block">
      <a href={featuredLink} title={featuredTitle}>
        <div className="icon"><FontAwesomeIcon icon={featuredIcon} /></div>
        <h5>{featuredTitle}</h5>
        <p>{featuredText}</p>
      </a>
    </div>
    </Col>
  );
}

export default FeaturedBlock;
