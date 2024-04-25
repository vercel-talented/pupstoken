import React from 'react';
import '../App.css';
import img_bk from '../images/new/7.png'
import img_bk1 from '../images/new/1.png'

function Mintonomics() {
    return (
        <section id="mintonomics" className="_container">
            <div className='sub_container'style={{ position:'relative' }}>   
                <img style={{ objectFit: 'fit', width: '100%', height: '80%' , top:'200px'}} src={img_bk} alt=''/>    
                <img className='chart-image' style={{position:'absolute', width: '30%', height: '40%', top:'55%', left:'0%' }} src={img_bk1} alt=''/>  
                <div className='m_left_class' style={{position:'absolute', width: '30%', height: '40%', top:'55%', left:'80%' }}>
                    <div style={{ position:'relative', width: '100%', height: '200px' ,fontFamily: 'CustomFont1', fontSize: '100px'}}>mintonomics</div>
                    <div style={{ position:'relative', width: '100%', height: '200px' ,fontFamily: 'CustomFont1', fontSize: '20px'}}>While it had a history-making airdrop on Bitcoin, PUPS is just a meme coin—zero roadmap, 100% community driven token. It represents the future of meme culture and digital assets on Bitcoin, proving that with unity and a shared autistic vision, world peace is possible.</div>
                </div>
                
                <div style={{ objectFit: 'fit', width: '100%', height: '200px' }} ></div>
            </div>
        </section>
    );
}

export default Mintonomics;