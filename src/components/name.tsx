'use client';

import {FC} from "react";

interface NameProps{
	userName:string;
}

const Name: FC<NameProps> = ({userName}) => {
	// const username = process.env.NEXT_PUBLIC_USERNAME;
	console.log('name:client:', userName);

	return (<h1>Hi client {userName}!</h1>)
};

export default Name;