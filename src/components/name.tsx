'use client';

const Name = () => {
	const username = process.env.NEXT_PUBLIC_USERNAME;
	console.log('name:client:', username);

	return (<h1>Hi client {username}!</h1>)
};

export default Name;