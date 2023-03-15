import React from 'react'
import Contact from '../../Pages/Contact';
import {Row, Col, Form,TextArea,Divider, Input, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons/lib/icons';

export default function Footers() {
  const {TextArea } = Input;
  return (
    <div className='footers'> 

    <Row justify='center' >
      <Col sm={{span:22}} lg={{span:22}} xl={{span:22}} xs={{span:22}}>
      <h1 className='contact-headings'>Contact Me</h1>
        <Row gutter={20}>
          <Col sm={{span:18}} lg={{span:12}} xl={{span:12}} xs={{span:24}}>
          <h4 className='icons-contact'>Message Me</h4>
          <Form
          // labelCol={{
          //   span: 12,
          // }}
          // wrapperCol={{
          //   span: 10,
          // }}
          >
            <Row gutter={16}>
              <Col sm={{span:12}} lg={{span:12}} xl={{span:12}} xs={{span:12}}>
              <Form.Item
            rules={[
              {
                required:true,
                message: 'Write First Name'
              },
            ]}>
              <Input placeholder='First Name'/>
            </Form.Item>
              </Col>
              <Col sm={{span:12}} lg={{span:12}} xl={{span:12}} xs={{span:12}}>
              <Form.Item
            rules={[
              {
                required:true,
                message: 'Write First Name'
              },
            ]}>
              <Input placeholder='First Name'/>
            </Form.Item>
              </Col>
            </Row>
            <Form.Item
            rules={[
              {
                required:true,
                message: 'Write First Name'
              },
            ]}>
              <Input placeholder='Write Email'/>
            </Form.Item>

            <Form.Item
            
            rules={[
              {
                required:true,
                message: 'Write Message'
              },
            ]}>
              <TextArea rows={5}  placeholder='Write Message'/>
            </Form.Item>
            <Button className='contact-button'> Send Message </Button>

          </Form>
          </Col>

          <Col sm={{span:6}} lg={{span:12}} xl={{span:12}} xs={{span:24}}>
          <h4 className='title-contact'>Get In Touch</h4>
          <p className='description-contact'>I am a current bachelor's students who is eager to learn new technical skills and knowledge. 
            My quality and passion are the desire to learn new skills and the surroundings that are releavant 
            to my intrests. Among my traits are honesty and enjoyment of team sprite. I genuinely enjoy the work 
            I do, and I give it my all to be successful. As a result, I would greatly appriciate it 
            if you gave me the chance to join your team for the forthcomming project. I assure you that I won't let you down.</p>
            <span className='icons-contact'><UserOutlined style={{color:'orange', fontSize:'20px'}}/> Suman Rai</span><br/>
            <span className='icons-contact'><EnvironmentOutlined style={{color:'orange', fontSize:'20px'}}/> Kerabari, 9 Bhaluwa</span><br/>
            <span className='icons-contact'><MailOutlined style={{color:'orange', fontSize:'20px'}}/> sumaney111@gmail.com</span>
            
          </Col>
        </Row>
      </Col>
    </Row>
    </div>
  )
}
