/*
	entry
		프로퍼티로 빌드되기 전의 파일 경로
	ouput
		bundle로 만들어질 파일의 정보를 명시
	preLoaders
		loaders전에 실행되어야 하는 로더들을 선언하는 부분이다.
		babel-loader는 es2015코드를 컴파일 할 것이기 때문에 컴파일하기전에 lintㄹ를 하기위해서 preLoader에 선언한다.
	devtool
		소스 맵 설정을 사용하면 컴파일된 파일에서도 원래 파일 구조를 확인 가능
	loaders
		별도의 로더를 사용하면 프로퍼티에 나열해주면됨.
		test: 대상이 되는 파일이 매치될수있게 정규식을 넣음
		loader: 사용할 로더들의 이름 명시
	
*/
module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	devtool: '#inline-source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint',
				exclude: /(node_modules|bower_components)/
			}
		],
		loaders: [
			{
				test: /\.sass$/, 
				loader: 'style!css!sass'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}
