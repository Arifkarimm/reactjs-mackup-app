import React, { Component } from 'react';
import ProductList from '../../components/ProductList';
import Intro from '../../components/Intro'
import Loader from '../../components/Loader';
import Productfilter from '../../components/Productfilter';
import './index.css';



const textColor = {
	color: "tomato"
};

class Product extends Component {
	constructor(){
		super();

		this.state = {
			productlist: [],
			productName: "",
			isFatching: false
		}

		
	}


	OnProductinputchange = e => {
		this.setState({ productName: e.target.value, isFatching: true});

		fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${e.target.value}`)
		.then(response => response.json())
		.then(json => this.setState({ productlist: json, isFatching: false }))
	} 

	render(){ 
		const { productlist, productName, isFatching } = this.state;
		return(

			<div>
			<Intro message="Here you will find most favourite Beauty List Name"/>
				<div>
					<input 
						value={productName} 
						type="text" 
						onChange={this.OnProductinputchange} />
				</div>
				{
					!isFatching && productlist.length === 0 && productName.trim() === ""
					&&
					<p style={textColor}>Please enter product name into input field</p>
				}
				{
					!isFatching && productlist.length === 0 && productName.trim() !== ""
					&&
					<p style={textColor}>No products to be displayed</p>
				}
				{
					isFatching && <Loader />
				}
				{
					!isFatching && <ProductList list={this.state.productlist} />
				}
				
				<Productfilter />
			</div>

			
				
			
		)
	}
}

export default Product;