/**
 * Created by Increment on 27.11.2016.
 */
const
	express = require('express'),
	route = require('./route'),
	webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	configServer = require('./config'),
	bodyParser = require('body-parser'),
	path = require('path'),

	app = express(),
	compiler = webpack(config)
	;

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/** File system */
app.use(express.static('bower_components'), (req, res)=>{
	res.sendFile(path.join(__dirname, req.url));
});

app.use(route);

app.use('*', (err, req, res, next) => {
	/** @todo дописать обработку, если возникла ошибка передавать дальше */
	res.sendFile(path.join(__dirname, '/index.html'));
});

/** Last handler */
app.use((err, req, res, next) => {
	if(err){
		res.status(err.status || 500).json({
			error: {
				status: err.status,
				message: err.message
			}
		});
	}
});

app.listen(configServer.server.port, ()=> {
	console.info(`Listening on port ${configServer.server.port} http://localhost:${configServer.server.port}/`);
});