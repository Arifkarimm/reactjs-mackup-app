import React, { Component } from 'react';
import './index.css';

class Productfilter extends Component {
	constructor(){
       super();
       this.state = {
           data: [],
       };
   } 




componentDidMount(){
	

		fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
		.then(response => response.json())
		.then(json => this.setState({ data: json }))
	}


	render(){
		const { data } = this.state;
		return(
				<div>
					<h3>Product Filter</h3>
					<div>
					  {['brand'].map(key => (
					    <select key={key}>
					      {data.map(({ [key]: value }) => <option key={value}> {value} </option>)}
					    </select>
					  ))}
					</div>
				</div>
		)
	}
}

export default Productfilter;