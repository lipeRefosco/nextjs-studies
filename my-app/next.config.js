/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/users',
				destination: '/',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig
