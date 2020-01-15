import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';

const Article = ({articleTitle, articleText, articleLink, articleDate, articleSrc}) => {  
  
  return (
    <Col md="4">
        <div className="blog-article">
            <a href={articleLink}>
                <img src={articleSrc} className="img-fluid aligncenter" alt={articleTitle} />
                <div className="article-content">
                    <h4>{articleTitle}</h4>
                    <small>{articleDate}</small>
                    <div className="w-100"></div>
                    <a class="btn btn-primary" href={articleLink} title={articleTitle}>Read More</a>
                </div>
            </a>
        </div>
    </Col>
  );
}

export default Article;
