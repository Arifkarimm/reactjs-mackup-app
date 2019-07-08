import React, { Component } from 'react';
import Loader from '../../components/Loader';

class SingleProduct extends Component {
	constructor(){
		super();
		this.state = {
			show: null
		}
	}

	componentDidMount(){
		const { id } = this.props.match.params;

		fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${id}`)
		.then(response => response.json())
		.then(json => this.setState({ show: json }))
	}

	render(){
		const { show } = this.state;
		console.log(show);
		return (
			<div>
				{ show === null && <Loader /> }
				{ show !== null 
					&& 
				  <div>
				  	<p>show.name</p>
				  </div>
				}
			</div>
		)
	}
}

export default SingleProduct;