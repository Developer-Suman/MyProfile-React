import React from 'react';
import {Row, Col, Layout, Divider} from 'antd';
import Abilities from '../Abilities';
import Project from '../Project';
import About from '../About';
import Slider from './Slider';
export default function Home() {
  return (

    <>
    <Slider/>
    <About/>
    <Project/>
    <Abilities/>
    
    </>
   
  )
}
