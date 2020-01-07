import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  Container,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import MainNavigation from './components/MainNavigation';
import Hero from './components/Hero';
import ContentBlock from './components/ContentBlock';
import TitleSection from './components/TitleSection';
import FeaturedBlock from './components/FeaturedBlocks';
import GalleryBox from './components/GalleryBox';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Hero />
      <div id="main-content">
      	<div id="content-blocks">
	      	<ContentBlock contentTopTitle="Introducing New" contentSubTitle="Moiety Web UI Kit" contentText="Every day, we'll curate new stories from Makers — whether they're long-time CEOs or solo creators — to give real, accessible insight." contentLink="/" contentImage="https://placehold.it/600x350" />
	      	<ContentBlock order="order-last" contentTopTitle="Introducing New" contentSubTitle="Moiety Web UI Kit" contentText="Every day, we'll curate new stories from Makers — whether they're long-time CEOs or solo creators — to give real, accessible insight." contentLink="/" contentImage="https://placehold.it/600x350" />
	      	<ContentBlock order="order-last" contentTopTitle="Introducing New" contentSubTitle="Moiety Web UI Kit" contentText="Every day, we'll curate new stories from Makers — whether they're long-time CEOs or solo creators — to give real, accessible insight." contentLink="/" contentImage="https://placehold.it/600x350" />
     	</div>
       <div id="featured-blocks">
         <Container>
          <TitleSection sectionTitle="Featured Block" sectionText="Every day, we'll curate new stories from Makers — whether they're long-time CEOs or solo creators — to give real, accessible insight." />
          <Row>
            <FeaturedBlock featuredIcon="camera" featuredTitle="Information Architecture" featuredText="Development of the process and/or information flow of the system (i.e. for phone tree systems, this would be an option tree flowchart." featuredLink="/" />
            <FeaturedBlock featuredIcon="camera" featuredTitle="Information Architecture" featuredText="Development of the process and/or information flow of the system (i.e. for phone tree systems, this would be an option tree flowchart." featuredLink="/" />
            <FeaturedBlock featuredIcon="camera" featuredTitle="Information Architecture" featuredText="Development of the process and/or information flow of the system (i.e. for phone tree systems, this would be an option tree flowchart." featuredLink="/" />
          </Row>
         </Container>
       </div>
       <div id="gallery-box">
         <Container fluid={true}>
           <div className="gallery">
             <Row>
              <GalleryBox gallerySrc="http://dev.steelehouse.com/codepen/game.jpg" galleryName="User Interface Design" galleryTitle="Actual look and feel design of the final graphical user interface (GUI)." galleryLink="/" />
              <GalleryBox gallerySrc="http://dev.steelehouse.com/codepen/game.jpg" galleryName="User Interface Design" galleryTitle="Actual look and feel design of the final graphical user interface (GUI)." galleryLink="/" />
              <GalleryBox gallerySrc="http://dev.steelehouse.com/codepen/game.jpg" galleryName="User Interface Design" galleryTitle="Actual look and feel design of the final graphical user interface (GUI)." galleryLink="/" />              
             </Row>
             <Row>
              <GalleryBox gallerySrc="http://dev.steelehouse.com/codepen/game.jpg" galleryName="User Interface Design" galleryTitle="Actual look and feel design of the final graphical user interface (GUI)." galleryLink="/" />
              <GalleryBox gallerySrc="http://dev.steelehouse.com/codepen/game.jpg" galleryName="User Interface Design" galleryTitle="Actual look and feel design of the final graphical user interface (GUI)." galleryLink="/" />
              <GalleryBox gallerySrc="http://dev.steelehouse.com/codepen/game.jpg" galleryName="User Interface Design" galleryTitle="Actual look and feel design of the final graphical user interface (GUI)." galleryLink="/" />              
             </Row>
           </div>
         </Container>
       </div>
      </div>
    </div>
  );
}

export default App;
