var http = require('http'),
httpProxy = require('http-proxy');


var addresses = [
	{
		host: '127.0.0.1',
		port:  3001
	},

	{
		host:'127.0.0.1',
		port: 3002
	}
];


var proxy_s = httpProxy.createServer();


http.createServer(function(req,res){
var target = { target: addresses.shift() };
	console.log('balancing request to:',target);
	proxy_s.web(req,res,target);
	addresses.push(target.target);
}).listen(80);