import React from 'react';

export const FooterButtonComponent = ({ filters, name, children, handleChange }) => (
	<label>
		<input 
			type="radio" 
			name={name} 
			onChange={() => handleChange(name)} 
			checked={filters === name} 
		/>
		{children}
	</label>
);
