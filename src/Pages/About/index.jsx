import React from 'react';
import {Row, Col, Button} from 'antd';
import {SolutionOutlined, MessageOutlined} from '@ant-design/icons';

export default function About() {
  return (
    <>
    
    <div>
      
      <Row justify='center'>
      <h4 className='about-topic'>ABOUT ME</h4>
      
        <Col className='about' sm={{span:22}} lg={{span:22}} xl={{span:22}} xs={{span:22}}>
        
          <Row >
            <Col sm={{span:22}} lg={{span:22}} xl={{span:10}} xs={{span:22}}>
             <div className='about-parent'>
              <div className='about-child'>

              </div>

             </div>
             
            </Col>
            <Col sm={{span:24}} lg={{span:24}} xl={{span:14}} xs={{span:24}}>
              <div>
                <h4 className='details'>DETAILS</h4>
                <p className='description-contact' style={{color:'#000'}}>I am a current bachelor's students who is eager to learn new technical skills and knowledge. 
            My quality and passion are the desire to learn new skills and the surroundings that are releavant 
            to my intrests. Among my traits are honesty and enjoyment of team sprite. I genuinely enjoy the work 
            I do, and I give it my all to be successful. As a result, I would greatly appriciate it 
            if you gave me the chance to join your team for the forthcomming project. I assure you that I won't let you down.</p>

           <div className='about-details'>
            <div className='about-personalinfo'>
            <SolutionOutlined style={{fontSize:'45px', marginTop:'40px', marginLeft:'30px'}} />
              <h5 style={{fontSize:'15px', margin:'2px'}}>Personal Info</h5>
            </div>
            <div>
            <MessageOutlined style={{fontSize:'45px', marginTop:'40px', marginLeft:'30px'}} />
              <h5 style={{fontSize:'15px', margin:'2px'}}>Contact Me</h5>
            </div>
           </div>
           <div className='cvbtn'> 
           <Button style={{backgroundColor:'white'}}>Download CV</Button>

           </div>

           

              </div>
            </Col>
          </Row>
        </Col>

      </Row>
    </div>
    </>
    
  )
}
