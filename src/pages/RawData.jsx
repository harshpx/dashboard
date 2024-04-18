import React from 'react'
import getData from '../api/getData';

const RawData = () => {
	const data = getData();
	return (
		<div className='pt-4 md:pt-14 pb-4 px-4'>
			<div className='text-4xl font-bold mb-10'>Raw JSON Data</div>
			<div>{JSON.stringify(data)}</div>
		</div>
	)
}

export default RawData;