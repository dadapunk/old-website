const path = require("path");
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const MDX = require('@next/mdx');

// next.js configuration
const nextConfig = {
	
	webpack: (config, { isServer }) => {
		if (!isServer) {
      	config.node = {
        fs: 'empty'
     	}
    }
    config.resolve.alias.images = path.join(__dirname, "images");
    return config
	},
	
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
	target: 'serverless',
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/blog': { page: '/blog' },
		}
	},
	basePath: ghPages? '/dadapunk.github.io/' : '',
	assetPrefix: ghPages ? '/dadapunk.github.io/' : '',
}
module.exports = MDX({
	pageExtensions: ['js', 'jsx', 'md', 'mdx']
  }),

module.exports = withPlugins([
	[optimizedImages, {
		removeOriginalExtension: true,
		responsive: {
			adapter: require('responsive-loader/sharp'),
      sizes: [480, 720, 960],
    },
	}],

	
], nextConfig)