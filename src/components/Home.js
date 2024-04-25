import React from 'react';
import '../App.css';
import { Link } from 'react-scroll'
import { ReactComponent as BkImage } from '../images/new/4.svg'
import ReactRoundedImage from "react-rounded-image"
import img_bk from '../images/new/4.png'
import img_fav from '../images/new/fav.png'
import img_btn1 from '../images/new/11.png'
import img_btn2 from '../images/new/22.png'
import img_btn3 from '../images/new/33.png'
import img_btn4 from '../images/new/44.png'
import img_btn5 from '../images/new/55.png'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


function Home() {

    const anim1 = {
        position:'absolute', 
        top :'40%', 
        left:'10%', 
        width: '23%', 
        height: '43%'        
    }

    const btn1 = {
        position:'absolute', 
        top :'50px', 
        left:'-80px'  
    }
    const btn2 = {
        position:'absolute', 
        top :'50px', 
        left:'50px',   
          
    }
    const btn3 = {
        position:'absolute', 
        top :'50px', 
        left:'180px'      
    }
    const btn4 = {
        position:'absolute', 
        top :'170px', 
        left:'0px'        
    }
    const btn5 = {
        position:'absolute', 
        top :'170px', 
        left:'130px'       
    }

    
    return (
        <section id="home" className="home_container" >      
            <div className='sub_container'style={{ position:'relative' }}>                
                <img style={{ objectFit: 'fit', width: '100%', height: '100%', top: '-50px', position:'relative' }} src={img_bk} alt=''>                      
                </img>
                    
                
                <img className='animated-image' style={anim1} src={img_fav} alt=''/>  

                <div className='home_left_class' style={{position:'absolute', top:"50%", left:'60%', width:'300px', height:'500px'}}>
                    
                        <span style={{position:'inherit',shadow:'rgb(0, 0, 0) 0px 0px 2px',color:'rgb(255, 255, 255)',top:"-130px", left:'-230px', fontFamily: 'CustomFont1', fontSize: '100px'}} className="font-size-96 m-font-size-77">$pups</span>
                        <span style={{position:'inherit',color: 'rgb(255, 255, 255)', display: 'unset',top:"-50px", left:'-40px', fontFamily: 'CustomFont1', fontSize: '20px'}} className="font-size-18 m-font-size-14">Pup is the first memecoin on Bitcoin. Not affiliated with O.P.I.U.M or Bitcoin Puppets (100% community deployed)</span>
                        <div className='img_btn_container' style={btn1}>
                            <ReactRoundedImage className="roundedImage" image={img_btn1} roundedSize='0' imageWidth='100' imageHeight='100' alt='decr'/>
                        </div>
                        
                        <div className='img_btn_container' style={btn2}>
                            <ReactRoundedImage className="roundedImage" image={img_btn2} roundedSize='0' imageWidth='100' imageHeight='100'/>
                        </div>
                        <div className='img_btn_container' style={btn3}>
                            <ReactRoundedImage className="roundedImage" image={img_btn3} roundedSize='0' imageWidth='100' imageHeight='100'/>
                        </div>
                        <div className='img_btn_container' style={btn4}>
                            <ReactRoundedImage className="roundedImage" image={img_btn4} roundedSize='0' imageWidth='100' imageHeight='100'/>
                        </div>
                        <div className='img_btn_container' style={btn5}>
                            <ReactRoundedImage className="roundedImage" image={img_btn5} roundedSize='0' imageWidth='100' imageHeight='100'/>
                        </div>
                </div>
                
            </div>   
        </section>
    );
}

export default Home;
