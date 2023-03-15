import React from 'react'
import {Menu, Row, Col,Drawer} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { MenuOutlined } from '@ant-design/icons';

export default function Headers() {
    const [openMenu,setOpenMenu] = useState(false)
   
  return (
    <div>
  
        <div className='menuIcon' 
        style={{backgroundColor:'black',
        paddingTop:12,
        height:45,
        paddingLeft: 12}}>
          <MenuOutlined 
          style={{color:'white', 
          fontSize:'30px'}} 
          onClick={()=>{
            setOpenMenu(true)
          }}/>
        </div>
        <span className='headerMenu'>
          <Appmenu/>
        </span>
        
        <Drawer 
        placement='top'
        open={openMenu}
        onClose={()=>{
          setOpenMenu(false)
        }}
        closable={true} >
          <Appmenu isInline />
        </Drawer>
      </div>
    
  );

  function Appmenu({isInline = false}){
    const Nav = useNavigate();
    const [click, setClick] = useState(false);
    const onMenuClick = (items)=>{
        Nav(`/${items.key}`)
    }
    return(
        <Row>
        <Col span={24}>
            <Menu
            className='Headers'
            onClick={onMenuClick}
            style={{textDecoration:"none"}} onMouseEnter={e => e.target.style.textDecoration = "none"} 
            style={{padding:'15px 20px ', fontSize:'18px'}}
            mode={ isInline?"inline":"horizontal"}

            items={[
                {
                    label:<HomeOutlined/>,
                    key:''
                },
                {
                    label:'About',
                    key:'about'
                },
                
                {
                    label:'Project',
                    key:'project'
                },
                {
                    label:'Abilities',
                    key:'abilities'
                },
                {
                    label:'Contact',
                    key:'contact'
                }
            ]}/>

        </Col>
    </Row>

    )
  }
}
