const pathSrc = "./src";
const pathDest = "./public";

export default {
	root: pathDest,

	html: {
		src: pathSrc + "/html/*.html",
		watch: pathSrc + "/html/**/*.html",
		dest: pathDest
	},
	
	css: {
		src: pathSrc + "/css/*.css",
		watch: pathSrc + "/css/**/*.css",
		dest: pathDest + "/css"
	},

	scss: {
		src: [pathSrc + '/sass/{styles,}/*.{sass,scss}', pathSrc + '/sass/{libs,}/{bootstrap,}/*.{sass,scss}'],
		watch: [pathSrc + '/sass/**/*.{sass,scss}', '!.src/sass/{libs,}/{bootstrap,swiper,mircomodal}/*.{sass,scss}'],
		dest: pathDest + '/css/'
	},

	js: {
		src: pathSrc + "/js/*.js",
		watch: pathSrc + "/js/**/*.js",
		dest: pathDest + "/js"
	},
	
	img: {  
		src: pathSrc + '/assets/img/**/*.{png,jpg,jpeg,gif,svg}',
		watch: pathSrc + '/assets/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest: pathDest + '/img/'
	},

	font: {
		src: pathSrc + '/assets/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
		watch: pathSrc + '/assets/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
		dest: pathDest + '/font/'
	}
}