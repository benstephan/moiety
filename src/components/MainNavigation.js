import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import $ from 'jquery';

const MainNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


      $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
      })

      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

         //>=, not <=
        if (scroll >= 500) {
            //clearHeader, not clearheader - caps H
            $("#main-nav").addClass("scrolled");
        }
        else{
          $("#main-nav").removeClass("scrolled");
        }
    }); //missing );
  

  return (
    <div id="main-nav">
      <Navbar color="dark" dark expand="lg" fixed="top">
        <NavbarBrand href="/">
          <svg version="1.1" viewBox="0 0 370.2 52.8" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(45 5)">
              <g className="logo0">
                <path className="logo1" d="M41.3,13.7l5.1,14.5l5.1-14.5H57v20h-4.1v-5.5l0.4-9.4l-5.4,14.9H45l-5.4-14.9l0.4,9.4v5.5h-4.1v-20H41.3z"/>
                <path className="logo1" d="m85.8 24.1c0 2-0.3 3.7-1 5.2s-1.7 2.6-3 3.4c-1.3 0.9-2.8 1.3-4.5 1.3s-3.1-0.4-4.4-1.2-2.3-1.9-3-3.4-1.1-3.2-1.1-5.1v-1c0-2 0.4-3.7 1.1-5.2s1.7-2.6 3-3.4 2.8-1.2 4.4-1.2c1.7 0 3.1 0.4 4.4 1.2s2.3 2 3 3.4c0.7 1.5 1.1 3.2 1.1 5.2v0.8zm-4.2-0.9c0-2.1-0.4-3.7-1.1-4.8-0.8-1.1-1.8-1.6-3.2-1.6s-2.5 0.5-3.2 1.6c-0.8 1.1-1.1 2.7-1.1 4.7v1c0 2 0.4 3.6 1.1 4.8 0.8 1.1 1.8 1.7 3.2 1.7s2.4-0.5 3.2-1.6c0.7-1.1 1.1-2.7 1.1-4.7v-1.1z"/>
                <path className="logo1" d="m102 33.7h-4.1v-20h4.1v20z"/>
                <path className="logo1" d="M126.7,25h-7.9v5.4h9.3v3.3h-13.4v-20H128V17h-9.3v4.8h7.9V25z"/>
                <path className="logo1" d="M154.6,17h-6.1v16.7h-4.1V17h-6v-3.3h16.3V17z"/>
                <path className="logo1" d="m172.9 22.7l4.2-9h4.5l-6.6 12.7v7.3h-4.2v-7.3l-6.6-12.8h4.5l4.2 9.1z"/>
              </g>
              <g className="logo0">
                <path className="logo1" d="m222.5 13.7v13.7c0 1.3-0.3 2.5-0.9 3.5s-1.4 1.8-2.5 2.3-2.3 0.8-3.7 0.8c-2.1 0-3.8-0.6-5.1-1.7s-1.9-2.7-2-4.8v-13.8h1.7v13.5c0 1.7 0.5 3 1.4 3.9 1 0.9 2.3 1.4 3.9 1.4s3-0.5 3.9-1.4c1-0.9 1.4-2.2 1.4-3.9v-13.5h1.9z"/>
                <path className="logo1" d="m237.1 33.7h-1.7v-20h1.7v20z"/>
                <path className="logo1" d="m269.5 23.8l-2.8 2.8v7.2h-1.7v-20h1.7v10.8l10.3-10.9h2.1l-8.4 8.9 9 11.1h-2.1l-8.1-9.9z"/>
                <path className="logo1" d="m292.7 33.7h-1.7v-20h1.7v20z"/>
                <path className="logo1" d="m319.1 15.1h-6.9v18.6h-1.7v-18.6h-6.8v-1.4h15.4v1.4z"/>
              </g>
            </g>
              <circle className="logo1" cx="26.4" cy="26.4" r="22"/>
              <path className="logo2" d="m24.2 38.4c0 0.7 0.6 1.3 1.3 1.3 0.5 0 1-0.3 1.2-0.7l7.5-15.1c0.3-0.7 0.1-1.4-0.6-1.8-0.2-0.1-0.4-0.1-0.6-0.1h-6.7v-7.6c0-0.7-0.6-1.3-1.3-1.3-0.5 0-1 0.3-1.2 0.7l-7.5 15.1c-0.3 0.7-0.1 1.4 0.6 1.8 0.2 0.1 0.4 0.1 0.6 0.1h6.7v7.6z"/>
            </svg>

        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavigation;
