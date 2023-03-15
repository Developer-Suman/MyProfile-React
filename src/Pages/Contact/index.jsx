import React, { useState } from 'react';
import {Row, Col} from 'antd';



export default function Contact() {
  const [loading, isLoading] = useState(false)
  if(loading){
    return 'Loading....'
  }
  
  return (
    <>
    
    <Row justify='center'>
      <Col sm={{span:22}} lg={{span:22}} xl={{span:22}} xs={{span:22}}>
      {/* {isLoading(true)} */}
        <div className='maps'>
        <iframe width="1080" height="539" id="gmap_canvas" src="https://maps.google.com/maps?q=Kathmandu,%20KL%20Tower&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        </div>
        {/* {isLoading(false)} */}
      
      </Col>
    </Row>
    
    
    </>
  
  )
}
