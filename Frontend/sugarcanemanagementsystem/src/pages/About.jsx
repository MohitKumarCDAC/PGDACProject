import React from 'react';
import './pageCSS/about.css';
import bs from './products/productImage/brownsugar.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import ab from './products/productImage/factoryCycle.jpg';
import aboutimage from '../pages/factoryImage/sugarfactory4.jpg';

function About() {
  return (
    
    <div className='about'>
 <div className="about-container">
        <img 
          src={aboutimage}
          alt="brownsugar"
          className="bs-image"
        />
      </div>
      <div className="overlay-text">
        <h2>About</h2>
        </div>
      <Container>
        <Row className='row-gap'>
          <Col className='image-col'>
            <img src={bs} alt="Brown Sugar" className='about-image' />
          </Col>
          <Col className='text-col'>
            <p className='aboutp'>
              Three sugar mills located in the sugar-rich state of Maharashtra with a total crushing capacity of 20,000 MT cane per day and a production capacity of 300 KMT of sugar.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="about-image-container">
        <img 
          src={ab}
          alt="about"
          className="about-image"
        />
      </div>
    </div>
  );
}

export default About;
