import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const ProductListItem = ({ productlist }) => (

	<li>
		<Link to={`/productlist/${productlist.id}`}>
		{productlist.name}
		</Link>	
	</li>
)

const ProductList = (props) => {
	return (
		<div>
			<ul className="Product-list">
				{props.list.map(productlist => (
					<ProductListItem productlist={productlist} key={productlist.id}/>
				))}
			</ul>
		</div>
	)
}

export default ProductList;