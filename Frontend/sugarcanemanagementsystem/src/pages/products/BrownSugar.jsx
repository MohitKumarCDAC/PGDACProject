import React from 'react'
import './product.css'
import brownsugar from '../../pages/factoryImage/sugarfactory4.jpg';
import bs from './productImage/brownsugar.jpg';
import { Col, Container, Row } from 'react-bootstrap';



function BrownSugar() {
  return (
    <div className='brownsugar'>
      <div className="brownsugar-container">
        <img 
          src={brownsugar}
          alt="brownsugar"
          className="bs-image"
        />
      </div>
      <Container>
            <Row className='row-gap'>
                <Col>
               <div >
                <div>
                  <img src={bs} alt="bsugar"
                  className='bss-image'
                  />
                </div>
               </div>
                </Col>
                <Col>
                <h5 style={{marginTop:"80px"}}>
                Brown sugar is a type of sugar that contains molasses, which gives it its characteristic brown color and distinct 
                flavor. It is made by either partially refining raw sugar cane or by adding molasses to refined white sugar.
                Brown sugar can be light or dark, depending on the amount of molasses it contains. It is commonly used in baking, 
                cooking, and as a sweetener in various dishes and beverages. 
                </h5>
                </Col>
            </Row>
           </Container>
           <div className='brownsugar'>
      <h3 style={{ textAlign: 'left', color: '#921A40' }}>Benefits</h3>
      <ol className='benefits-list'>
        <li className='list'>
          <b>Natural Minerals:</b>
          <p>Brown sugar contains trace amounts of essential minerals such as calcium, potassium, iron, and magnesium due to the molasses. These minerals can contribute to your daily nutrient intake.</p>
        </li>
        <li className='list'>
          <b>Less Processed:</b>
          <p>Compared to white sugar, brown sugar undergoes less processing, retaining some of the natural molasses. This means it has a slightly richer flavor and may be perceived as a more natural option.</p>
        </li>
        <li className='list'>
          <b>Flavor Enhancement:</b>
          <p>The molasses in brown sugar imparts a unique caramel-like flavor to recipes, making it a popular choice for baked goods, sauces, and marinades.</p>
        </li>
        <li className='list'>
          <b>Moisture Retention:</b>
          <p>Brown sugar helps retain moisture in baked goods, leading to a softer texture in cookies, cakes, and other pastries.</p>
        </li>
        <li className='list'>
          <b>Antioxidant Properties:</b>
          <p>The molasses in brown sugar contains antioxidants, which can help combat oxidative stress in the body, although the amount is relatively 
            small compared to other sources of antioxidants.</p>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default BrownSugar
