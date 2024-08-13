import React from 'react'
import './product.css'
import molassis from '../../pages/factoryImage/sugarfactory4.jpg';
import bs from './productImage/molassis1.jpg';
import { Col, Container, Row } from 'react-bootstrap';



function Molasses() {
  return (
    <div className='molassis'>
      <div className="molassis-container">
        <img 
          src={molassis}
          alt="molassis"
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
                Molasses is a thick, dark syrup that is a byproduct of refining sugar cane or sugar beets into sugar. 
                It is produced during the sugar extraction process, where the juice is boiled and concentrated to form sugar crystals.
                 The remaining liquid, which contains a significant amount of sugar, is molasses. Molasses can vary in flavor, color,
                  and consistency depending on how many times it has been boiled and the source of the sugar. It has a robust, slightly 
                  bitter taste and is used as a sweetener and flavoring agent in various foods and beverages.
                </h5>
                </Col>
            </Row>
           </Container>
           <div className='brownsugar'>
      <h3 style={{ textAlign: 'left', color: '#921A40' }}>Benefits</h3>
      <ol className='benefits-list'>
        <li className='list'>
          <b>Rich in Nutrients:</b>
          <p>Molasses is a good source of essential minerals such as iron, calcium, magnesium, and potassium. These nutrients support overall health, including bone strength, cardiovascular function, and muscle and nerve function.</p>
        </li>
        <li className='list'>
          <b>Supports Digestive Health:</b>
          <p>Molasses contains small amounts of dietary fiber, which can aid in digestion and help maintain regular bowel movements. It can also soothe the digestive tract and reduce symptoms of constipation.</p>
        </li>
        <li className='list'>
          <b>Helps with Anemia:</b>
          <p>Molasses is particularly rich in iron, an essential mineral for producing hemoglobin in red blood cells. Consuming molasses can help combat iron deficiency and support healthy blood levels.
          </p>
        </li>
        <li className='list'>
          <b>Boosts Immunity:</b>
          <p>The presence of antioxidants and minerals in jaggery can strengthen the immune system. Regular consumption can help improve resistance to infections and illnesses.</p>
        </li>
        <li className='list'>
          <b>Boosts Energy Levels:</b>
          <p>The natural sugars in molasses provide a quick source of energy, making it a useful ingredient for athletes or anyone needing an energy boost. It can be a healthier alternative to refined sugars.</p>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Molasses
