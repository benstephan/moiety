import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  Container,
  Row
} from 'reactstrap';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import MainNavigation from './components/MainNavigation';
import Hero from './components/Hero';
import ContentBlock from './components/ContentBlock';
import TitleSection from './components/TitleSection';
import FeaturedBlock from './components/FeaturedBlocks';
import GalleryBox from './components/GalleryBox';
import CallToAction from './components/CallToAction';
import Article from './components/Article';
import MainFooter from './components/Footer';

function App() {
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function () {
      $('.gallery-box, .featured-block, .title-section, .content-block').each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('visible');
          }
      });

  });
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
         <Container>
         <TitleSection sectionTitle="Gallery" sectionText="Every day, we'll curate new stories from Makers — whether they're long-time CEOs or solo creators — to give real, accessible insight." />
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
       <div id="call-to-actions">
          <CallToAction />
       </div>
       <div id="articles">
         <Container>
         <TitleSection sectionTitle="Blog" sectionText="Every day, we'll curate new stories from Makers — whether they're long-time CEOs or solo creators — to give real, accessible insight." />
           <Row>
             <Article articleSrc="https://placehold.it/600x350" articleLink="/" articleTitle="This is the Title of the Article" articleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed diam id magna fermentum dignissim vitae ut ipsum. Mauris egestas neque ut magna feugiat congue." articleDate="January 6th, 2020" />
             <Article articleSrc="https://placehold.it/600x350" articleLink="/" articleTitle="This is the Title of the Article" articleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed diam id magna fermentum dignissim vitae ut ipsum. Mauris egestas neque ut magna feugiat congue." articleDate="January 6th, 2020" />
             <Article articleSrc="https://placehold.it/600x350" articleLink="/" articleTitle="This is the Title of the Article" articleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed diam id magna fermentum dignissim vitae ut ipsum. Mauris egestas neque ut magna feugiat congue." articleDate="January 6th, 2020" />
           </Row>
         </Container>
       </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default App;
