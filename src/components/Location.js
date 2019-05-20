import React from 'react';

export default function Location({ location }) {
	return (
		<div>
			<h2>{location.city}</h2>
			<h3>{location.country}</h3>
			<img src={location.image} alt='you know what this is...' />
			<h3>{location.continent}</h3>
		</div>
	);
}
