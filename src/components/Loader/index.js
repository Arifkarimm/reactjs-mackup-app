import React from 'react';
import loaderSrc from '../../assests/loader.gif';

const Loader = props => (
	<div>
		<img 
			style={{ width: 75 }} 
			src={loaderSrc} 
			alt="loader icon" />
	</div>
	)
	


export default Loader;