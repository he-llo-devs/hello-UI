/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			}
		]
	},

	async redirects() {
		return [
			{
				source: '/',
				destination: '/overview',
				permanent: true
			}
		];
	}

};

module.exports = nextConfig;
