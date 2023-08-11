/** @type {import('next').NextConfig} */
//output: "standalone",
const nextConfig = {
	publicRuntimeConfig: {
		USERNAME: process.env.USERNAME,
		NEXT_PUBLIC_USERNAME: process.env.NEXT_PUBLIC_USERNAME
	}
}

module.exports = nextConfig
