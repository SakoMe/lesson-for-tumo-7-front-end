import React, { useState } from 'react';

export default function SearchBar({ handleSearch }) {
	const [value, setValue] = useState('');

	const handleChange = event => setValue(event.target.value);

	const handleSubmit = event => {
		event.preventDefault();
		handleSearch(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Enter a continent' value={value} onChange={handleChange} />
			<input type='submit' value='Search' />
		</form>
	);
}
