import React from 'react';
import useFetch from 'react-fetch-hook';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Action from './actions';

function Home() {
	const Users = useFetch("https://assessment.api.vweb.app/users"),
		Products = useFetch("https://assessment.api.vweb.app/products"),
		Orders = useFetch("https://assessment.api.vweb.app/orders");
	
	if (Users.isLoading || Products.isLoading || Orders.isLoading) return (
		<div className="container-fluid loader-contn p-5 d-flex justify-content-center align-items-center">
			<i className="loader spinner-border"></i>
		</div>
	);

	if (Users.error || Products.error || Orders.error) return (
		<div className="container-fluid">
			An error occured
		</div>
	);

	return (
		<div className="App">
			<Action users={Users.data} products={Products.data} orders={Orders.data}></Action>
		</div>
	);
}

export default Home;

