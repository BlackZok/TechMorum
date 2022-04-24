const isProd = process.argv.includes('--production');
const isDev = !isProd;


export default {
	configureWebpack: {
		devtool: 'source-map'
	},

	isProd: isProd,
	isDev: isDev,

	htmlmin: {
		collapseWhitespace: isProd
	},

	webpack: {
		mode: isProd ? "production" : "development",
	},
	
	imagemin: {
		verbose: true
	},

	fonter: {
		formats: ["ttf", "woff", "eot", "svg"]
	}
}