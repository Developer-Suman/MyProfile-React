import React from 'react';
import {Row, Col, Divider, Button} from 'antd';

export default function Project() {
  return (
    <div className='abilities'>
      
      <h4 className='ability-topic'>WELCOME VISITORS</h4>
      <Row justify='center'>
        
        <p className='project-description'>I am greatly thankful to all the visitors who visitated my website and know my information</p>
        <Col sm={{span:22}} lg={{span:22}} xl={{span:22}} xs={{span:22}} >
          <Row gutter={[80,40]}>
            <Col sm={{span:8}} lg={{span:8}} xl={{span:8}} xs={{span:24}}>
              <div className='project-parent'>
              <div className='p-button'>
                <Button className='btnclass'>Find Project</Button>
              </div>

              </div>
              
            </Col>
            <Col sm={{span:8}} lg={{span:8}} xl={{span:8}} xs={{span:24}}>
            <div className='project-parent'>
            <div className='p-button'>
                <Button className='btnclass' >Find Project</Button>
              </div>
              </div>

            </Col>
            <Col sm={{span:8}} lg={{span:8}} xl={{span:8}} xs={{span:24}}>
            <div className='project-parent'>
            <div className='p-button'>
                <Button className='btnclass'>Find Project</Button>
              </div>
              </div>
              
            </Col>
          </Row>
        </Col>
      </Row>
      

    </div>
  )
}
