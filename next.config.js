if (!process.env.WORDPRESS_API_URL) {
	throw new Error(`
			Please provide a valid WordPress instance URL.
			Add to your environment variables WORDPRESS_API_URL.
	`);
}

/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		domains: [
			process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
			"0.gravatar.com",
			"1.gravatar.com",
			"2.gravatar.com",
			"secure.gravatar.com",
		],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		formats: ["image/webp"],
	},
};
