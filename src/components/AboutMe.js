import React from 'react';
import '../App.css';
import img_bk from '../images/new/5.png'
import img_bk1 from '../images/new/2.png'

function AboutMe() {
    return (
        <section id="experience" className="_container">      
            <div className='sub_container'style={{ position:'relative' }}>   
                <img style={{ objectFit: 'fit', width: '100%', height: '100%', top: "200px" }} src={img_bk} alt=''/>    
                <img style={{ position:"absolute", width: '50%', height: '90%', top:'40%', left:'25%' }} src={img_bk1} alt=''/>    
                <div style={{ objectFit: 'fit', width: '100%', height: '200px' }} ></div>
            </div>
        </section>
    );
}

export default AboutMe;