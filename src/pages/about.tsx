import {GetStaticProps, InferGetStaticPropsType} from "next";
import Name from "@/components/name";

type AboutProps = {
	userName: string;
}

export const getStaticProps: GetStaticProps<AboutProps> = () => {
	const envName = process.env.USERNAME;
	const userName = `Hi ${envName} from the server side!`;

	return {
		props: {
			userName
		}
	}
};

export default function About({ userName }: InferGetStaticPropsType<typeof getStaticProps>){

	// const username = process.env.USERNAME;
	console.log('name:', userName);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<Name />
				<h2>{userName}!</h2>
			</div>
		</main>
	)
}