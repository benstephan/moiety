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

const TitleSection = ({sectionTitle, sectionText}) => {  

  return (

    <div className="title-section">
        <h2>{sectionTitle}</h2>
        <div className="bordered"></div>
        <p>{sectionText}</p>
    </div>
  );
}

export default TitleSection;
