/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	publicRuntimeConfig: {
		USERNAME: process.env.USERNAME,
		NEXT_PUBLIC_USERNAME: process.env.NEXT_PUBLIC_USERNAME
	}
}

module.exports = nextConfig
