import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
import './Logo.css'


const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="outline Tilt br5 shadow-5" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
	 			<div className="tilt-inner pa3"> <img style={{paddingTop: '5px'}} alt='brain' src={brain}/>
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo








 
