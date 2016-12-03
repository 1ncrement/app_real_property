/**
 * Created by Increment on 27.11.2016.
 */

const
	express = require('express'),
	path = require('path'),
	router = express.Router()
	;

function routing(req, res, next) {
	res.sendFile(path.join(__dirname, '/index.html'));
}

router.get([
	'/',
	'/login',
	'/registration'
], routing);

module.exports = router;