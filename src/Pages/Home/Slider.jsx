import React from 'react';
import {Row, Col, Image} from 'antd';
import image from '../../Images/Slider1.png'


export default function Slider() {
  return (
    <div>
      
        <Row justify='center'>
            <Col sm={{span:22}} lg={{span:24}} xl={{span:24}} xs={{span:22}}>
             
              <Image className='slider-image'
              preview={false}
               
               src={image}
             />

            
            
            
            </Col>
        </Row>
      
    </div>
  )
}
