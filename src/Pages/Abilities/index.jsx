import React from 'react';
import {Row, Col, Divider,Image} from 'antd';
import html from '../../Images/html.png';
import django from '../../Images/django.png';
import react from '../../Images/react.png';
import bootstrap from '../../Images/bootstrap.png';
import mysql from '../../Images/mysql.png';
import wordpress from '../../Images/wordpress.png';
import photoshop from '../../Images/photoshop.png';
import premier from '../../Images/premier.png';


export default function Abilities() {
  return (
    <div className='abilities'>
      
      <h4 className='ability-topic'>ABILITIES</h4>
      
      <Row justify='center'>
       
        <Col sm={{span:22}} lg={{span:22}} xl={{span:22}} xs={{span:22}}>
          <Row>
            <Col sm={{span:12}} lg={{span:12}} xl={{span:12}} xs={{span:12}}>
              <div className='skills'>
                <h4 className='ability-heading'>Skills</h4>

                <Row justify='center' gutter={[70, 80]}>
                  <Col sm={{span:22}} lg={{span:22}} xl={{span:22}} xs={{span:22}}>
                    <Row style={{marginLeft:'40px'}}>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={html}/>
                      </Col>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={django}/>
                      </Col>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={react}/>
                      </Col>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={bootstrap}/>
                      </Col>
                      
                    </Row>

                    <Row style={{marginLeft:'40px', marginTop:'30px'}}>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={mysql}/>
                      </Col>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={wordpress}/>
                      </Col>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={photoshop}/>
                      </Col>
                      <Col  sm={{span:12}} lg={{span:12}} xl={{span:6}} xs={{span:12}}>
                      <Image width={100} src={premier}/>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
                
              </div>
            </Col>
            <Col sm={{span:12}} lg={{span:12}} xl={{span:12}} xs={{span:12}}>
              <div className='experience'>
              <h4 className='ability-heading'>Experience</h4>
              </div>
            </Col>
          

          </Row>
          
        </Col>
     

      </Row>
    </div>
  )
}
