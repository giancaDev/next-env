// import {GetServerSideProps, GetStaticProps, InferGetStaticPropsType} from "next";
import Name from "@/components/name";
import getConfig from "next/config";

type AboutProps = {
	userName: string;
}

const {publicRuntimeConfig} = getConfig();


// export const getStaticProps: GetStaticProps<AboutProps> = () => {
// 	const envName = publicRuntimeConfig.USERNAME;
// 	const userName = `Hi ${envName} from the server side!`;
//
// 	return {
// 		props: {
// 			userName
// 		}
// 	}
// };

export default function About({ userName }: any){

	// const username = process.env.USERNAME;
	console.log('name:', userName);
	const clientUserName = publicRuntimeConfig.NEXT_PUBLIC_USERNAME as string;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
				<Name userName={clientUserName} />
				<h2>{userName}!</h2>
			</div>
		</main>
	)
}

export const getServerSideProps = () => {
	return {
		props: {
			userName: publicRuntimeConfig.USERNAME as string
		}
	}
};