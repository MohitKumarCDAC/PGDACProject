// src/pages/Home.js
import React from 'react';
import './pageCSS/Home.css'; // Import the CSS file
import {  Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home-container">
            
                <div className='mn-1'><h2 className='projectname'> TULJABHAVANI SUGARCANE FACTORY</h2></div>

           <Container>
            <Row className='row-gap'>
                <Col>
               <div >
                <div className='mn-2'></div>
               </div>
                </Col>
                <Col>
               <p className='para'>Since 2011, <b>Tuljabhavani</b> SugarCane Factory has played a key role in making life a little sweeter. SASPL is a technology company with a business mix that spans sugar, specialty sugars, co-generated power, alcohol (RS), extra neutral alcohol (ENA), Absolute Alcohol (Ethanol).</p> 
                </Col>
            </Row>
           </Container>
           
           <Container>
            <Row className='row-gap'>
                <Col>
               <div >
                <div className='mn-3'></div>
               </div>
                </Col>
                <Col>
                <h2 className='mission'>Our Mission</h2>
               <p className='para'>We will remain committed to sustainable business practices; deliver world-class quality to our customers; nurture a global work culture; and build a financially strong, growth oriented company that creates value.</p> 
              
                </Col>
            </Row>
           </Container>

           <Container>
            <Row className='row-gap'>
                <Col>
               <div >
                <div className='mn-4'></div>
               </div>
                </Col>
                <Col>
               <h2 className='paravalues'>Values</h2> 
               <ol>
                <li>Farmers first</li>
                <li>Cherish customers</li>
                <li>Encourage ideas, innovation, excellence, enterprise and teamwork in employees</li>
                <li>Leverage world-class technology</li>
                <li>Aspire to be a learning organization</li>
               </ol>
                </Col>
            </Row>
           </Container>

           <Container>
            <Row className='row-gap'>
                <Col>
               <div >
                <div className='mn-6'></div>
               </div>
                </Col>
                <Col>
               <p className='para'>In a sugar cane factory, it's important to be mindful of several environmental factors. Ensure good air quality by managing dust and emissions from machinery with proper ventilation and dust control measures. Water usage is significant, so managing wastewater properly is crucial to prevent pollution. Effective waste management is needed to avoid contaminating soil and water with byproducts and waste. The factory’s energy consumption should be optimized by adopting energy-efficient practices to minimize environmental impact. Additionally, handle and store chemicals with care to prevent spills and leaks. Addressing these issues helps reduce the factory’s overall environmental footprint.</p> 
                </Col>
            </Row>
           </Container>
                
           
        </div>
    );
};

export default Home;
