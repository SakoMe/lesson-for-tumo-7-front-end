import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import Location from './Location';
import Loader from './Loader';
import destinations from '../apis/destinations';

function App() {
	const [locations, setLocations] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSearch = async term => {
		setIsLoading(true);
		try {
			const response = await destinations.get('/api/destinations', {
				params: {
					continent: term,
				},
			});
			setLocations(response.data);
			setIsLoading(false);
		} catch (error) {
			setError('We are sorry! Something went wrong!');
			setIsLoading(false);
		}
	};

	useEffect(() => {
		handleSearch();
	}, []);

	const renderImage = () => {
		if (isLoading) return <Loader />;
		if (error) return <div className='error'>{error}</div>;

		return (
			<div>
				{locations.map(location => (
					<Location key={location._id} location={location} />
				))}
			</div>
		);
	};

	return (
		<div className='App'>
			<h1>Search for contries on different continents</h1>
			<SearchBar handleSearch={handleSearch} />
			<div>{renderImage()}</div>
		</div>
	);
}

export default App;
