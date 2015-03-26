var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var app = express()
var RedisQueue = require("simple-redis-queue");
// var http = require('http'),
// httpProxy = require('http-proxy');

// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})

var myQueue = new RedisQueue(client);

var x;
var visited = [];
var toSend = [];
var items = [];
var meowItems = [];
var otherArray = [];
var display = [];

//set and get

client.set("one", "vineeta");
client.get("one", function(err,value){ console.log(value)});
client.set("two","this message will self-destruct in 10 seconds");
client.expire("two",10);
client.get("two", function(err,value){ x = value;
 console.log(value);
});


///////////// WEB ROUTES

// Add hook to make it easier to get all visited URLS.
app.use(function(req, res, next) 
{
	console.log(req.method, req.url); //--print this
	// ... INSERT HERE.
	//lpush, ltrim, lrange

 	client.lpush(visited,req.url,function(err,reply){

		console.log(reply); //--print this
		
 	});

 	client.lrange(visited, 0,4,function(err,reply){

		console.log("lrange:",reply); //--print this
		toSend = reply //impt

	});

	next(); // Passing the request to the next handler in the stack.
 });


app.get('/recent', function(req, res) {
  res.send(toSend)
  
})


app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
   //console.log(req.body) // form fields
   //console.log(req.files) // form files
   

   if( req.files.image )
   {
   		//var name = req.files.image.name
	   fs.readFile( req.files.image.path, function (err, data) {
	  		if (err) throw err;
	  		var img = new Buffer(data).toString('base64');
	  		//var img = data.toString('base64');
	  		//console.log('-------------',img);
	  		
	 	// console.log(reply);
		// });

	    //items.push(req.files.image.name);
	   // console.log(img.length)

	   //here
	  //myQueue.push(items, img);

	   client.rpush(items,img,function(err,reply){

	    		//console.log(reply);
	    });

	   
  
	});
	   //console.log("items:",items);
	   //console.log("visited:", visited);
	}
	//console.log(req.files.image.name);

   res.status(204).end()
}]);

 app.get('/meow', function(req, res) {
// 	if( req.files.image )
   {
// 	   fs.readFile( req.files.image.path, function (err, data) {
// 	  		if (err) throw err;
// 		//if (err) throw err
// 		//console.log(items);
		
// 		//console.log("in meow:",items, "in meow");

		client.rpoplpush(items,otherArray, function(err,reply){

	    		//display = reply
	    });

		client.lrange(otherArray, 0, 0 , function(err,reply){

	    		display = reply
	    }); 
		// client.lrange(items, 0, 1 , function(err,reply){

	 //    		meowItems = reply
	 //    }); 


		 res.writeHead(200, {'content-type':'text/html'});
		 display.forEach(function(imagedata)
		 {

		//var item = 	new Buffer(meowItems[0],'base64');
   		res.write("<h1>\n<img src='data:image/jpg;base64,"+imagedata+"'/>");
   		//out << meowItems[0]

   		//var x = meowItems[0].toString()
   	// 	var map = new Buffer(x,'base64');
   	//  res.writeHead(200, {'content-type':'text/html'});
    // // res.write("hi there!<img src='data:morning.jpg,"+map+"'/>");
    // res.write(meowItems[0]);
    //response.end();
		});
   	res.end();
// 	});
	}
// console.log("in meow:",res.body) // form fields
// console.log(res.files) // form files

	//res.send(meowItems)
 })

	app.get('/', function(req, res) {
  	res.send('hello world')
})


// HTTP SERVER
var server = app.listen(3001, function () {

var host = server.address().address
var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

//httpProxy.createProxyServer({target:'http://localhost:3000'}).listen(80);
