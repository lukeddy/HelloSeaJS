seajs.config({
	// 别名配置
    //TODO 添加bootstrap
	alias: {
		'seajs-text' : 'assets/scripts/seajs/seajs-text/1.1.1/seajs-text',
		'jquery'     : 'assets/scripts/jquery/1.9.1/jquery',
		
		'util'     : 'assets/scripts/application/util',
		'application' :'assets/scripts/application/application',
        'index': 'assets/scripts/application/index'
	},
	map: [

		[ /^(.*\.(?:css|js|tpl))(.*)$/i, '$1?'+seajsTimestamp ]
	],

	// 路径配置
	//paths: {
	//	'gallery': 'https://a.alipayobjects.com/gallery'
	//},

	// 变量配置
	//vars: {
	//	'locale': 'zh-cn'
	//},

	// 映射配置
	//map: [
	//	['http://example.com/js/app/', 'http://localhost/js/app/']
	//],

	// 预加载项

	preload: ['jquery', 'seajs-text'],
	//preload: ['jquery', 'seajs-text', 'seajs-combo'],

	// 调试模式
	debug: true,

	// Sea.js 的基础路径
	base: 'http://localhost:63342/HelloSeaJS/',

	// 文件编码
	charset: 'utf-8'
});