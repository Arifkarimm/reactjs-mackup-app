import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product from '../../containers/Product';
import SingleProduct from '../../containers/SingleProduct';

const Main = props => (
	<Switch>
		<Route exact path="/" component={Product} />
		<Route path="/productlist/:id" component={SingleProduct} />
	</Switch>
)

export default Main;