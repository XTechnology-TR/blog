if (!process.env.WORDPRESS_API_URL) {
	throw new Error(`
			Please provide a valid WordPress instance URL.
			Add to your environment variables WORDPRESS_API_URL.
	`);
}

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		formats: ["image/webp"],
		qualities: [75],
		minimumCacheTTL: 2678400, // 31 days
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i0.wp.com",
				port: "",
				pathname: "/blogwp.xtechnology.co/wp-content/uploads/**",
			},
		],
	},
};
