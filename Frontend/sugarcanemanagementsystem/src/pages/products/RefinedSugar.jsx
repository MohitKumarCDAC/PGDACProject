import React from 'react'
import './product.css'
import refineds from '../../pages/factoryImage/sugarfactory4.jpg';
import bs from './productImage/refinedsugar.jpg';
import { Col, Container, Row } from 'react-bootstrap';



function RefinedSugar() {
  return (
    <div className='refindsugar'>
      <div className="refinedsugar-container">
        <img 
          src={refineds}
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
                Refined sugar, often referred to as granulated sugar or white sugar, is a highly processed sweetener derived from sugar cane or sugar beets. The refining process 
                removes the natural molasses and impurities from the raw sugar, resulting in a fine, white crystalline substance. Refined sugar is widely 
                used in cooking and baking for its sweet taste and ability to dissolve easily in liquids. It is commonly found in a variety of food products, 
                including beverages, baked goods, and sweets.
                </h5>
                </Col>
            </Row>
           </Container>
           <div className='brownsugar'>
      <h3 style={{ textAlign: 'left', color: '#921A40' }}>Benefits</h3>
      <ol className='benefits-list'>
        <li className='list'>
          <b>Quick Source of Energy:</b>
          <p>Refined sugar provides a rapid source of energy as it is quickly absorbed into the bloodstream. This can be beneficial for immediate energy needs, such as during intense physical activity.</p>
        </li>
        <li className='list'>
          <b>Versatile Ingredient:</b>
          <p>Due to its neutral flavor and fine texture, refined sugar is a versatile ingredient used in a wide range of recipes. It enhances the taste and texture of baked goods, desserts, and beverages.</p>
        </li>
        <li className='list'>
          <b>Preservation:</b>
          <p>Refined sugar acts as a preservative in many food products. Its ability to inhibit microbial growth helps extend the shelf life of jams, jellies, and other preserved foods.
          </p>
        </li>
        <li className='list'>
          <b>Consistency in Baking:</b>
          <p>Refined sugar provides consistent sweetness and texture in baking. Its precise measurement and dissolving properties help achieve the desired results in recipes.</p>
        </li>
        <li className='list'>
          <b>Improves Food Texture:</b>
          <p>In baked goods, refined sugar contributes to the texture, moisture retention, and browning. It helps create the right crumb structure and softness in cakes, cookies, and pastries.</p>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default RefinedSugar
