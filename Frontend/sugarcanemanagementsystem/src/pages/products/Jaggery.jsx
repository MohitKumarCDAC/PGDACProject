import React from 'react'
import './product.css'
import jaggery from '../../pages/factoryImage/sugarfactory4.jpg';
import bs from './productImage/jaggery.jpg';
import { Col, Container, Row } from 'react-bootstrap';



function Jaggery() {
  return (
    <div className='jaggery'>
      <div className="jaggery-container">
        <img 
          src={jaggery}
          alt="jaggery"
          className="bs-image"
        />
      </div>
      <Container>
            <Row className='row-gap'>
                <Col>
               <div >
                <div>
                  <img src={bs} alt="jsugar"
                  className='bs-image'
                  />
                </div>
               </div>
                </Col>
                <Col>
                <h5 style={{marginTop:"80px"}}>
                Jaggery is a traditional, unrefined sweetener made from sugarcane or palm sap. It is commonly used in South Asia,
                 Africa, and some Latin American countries. The process of making jaggery involves extracting juice from the 
                 sugarcane or palm sap, boiling it until it thickens, and then cooling it to form a solid block. Jaggery has a rich, 
                 caramel-like flavor and a brown color due to the presence of molasses. Unlike refined sugar, jaggery retains more
                  nutrients and has a more complex flavor profile.
                </h5>
                </Col>
            </Row>
           </Container>
           <div className='brownsugar'>
      <h3 style={{ textAlign: 'left', color: '#921A40' }}>Benefits</h3>
      <ol className='benefits-list'>
        <li className='list'>
          <b>Rich in Nutrients:</b>
          <p>Jaggery contains essential minerals like iron, calcium, magnesium, and potassium. These nutrients support various bodily functions, including bone health, blood production, and electrolyte balance.</p>
        </li>
        <li className='list'>
          <b>Improves Digestion:</b>
          <p>Jaggery is known to aid digestion by stimulating the production of digestive enzymes. It can help alleviate constipation and promote a healthy digestive system.</p>
        </li>
        <li className='list'>
          <b>Detoxification:</b>
          <p>Jaggery acts as a natural detoxifier by helping cleanse the liver and eliminate toxins from the body. It supports overall liver health and enhances the body's natural detoxification processes.</p>
        </li>
        <li className='list'>
          <b>Boosts Immunity:</b>
          <p>The presence of antioxidants and minerals in jaggery can strengthen the immune system. Regular consumption can help improve resistance to infections and illnesses.</p>
        </li>
        <li className='list'>
          <b>Energy Boost:</b>
          <p>Jaggery provides a quick source of energy due to its natural sugars. It can be a beneficial alternative to refined sugars for maintaining energy levels throughout the day.</p>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Jaggery
