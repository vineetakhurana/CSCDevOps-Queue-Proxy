var redis = require('redis')
var multer  = require('multer')
var express = require('express')
var fs      = require('fs')
var app = express()

var args = process.argv.slice(2);
var PORT = args[0];
// REDIS
// var client = redis.createClient(6379, '127.0.0.1', {})

// var x;
// var set_val;
// var visited = [];
// var toSend = [];
// var items = [];
// var meowItems = [];
// var otherArray = [];
// var display = [];

// //set and get

// //step 1: set and get "one"
// // client.set("one", "vineeta");
// // client.get("one", function(err,value){ console.log(value);
// // set_val = value;
// // });

// //step 2: set and get the message
// //client.set("two","this message will self-destruct in 10 seconds");
// //step 3: expire this message and get
// // client.expire("two",10);
// // client.get("two", function(err,value){ set_val = value;
// //  console.log(value);
// // });


// ///////////// WEB ROUTES


// //step 4: do lpush , lrange to get last 5 visited pages

// // Add hook to make it easier to get all visited URLS.
// app.use(function(req, res, next) 
// {
// 	console.log(req.method, req.url); //--print this
// 	// ... INSERT HERE.
// 	//lpush, ltrim, lrange

//  	client.lpush(visited,req.url,function(err,reply){

// 		console.log(reply); //--print this
		
//  	});

//  	client.lrange(visited, 0,4,function(err,reply){

// 		console.log("lrange:",reply); //--print this
// 		toSend = reply //impt

// 	});

// 	next(); // Passing the request to the next handler in the stack.
//  });


// app.get('/recent', function(req, res) {
//   res.send(toSend)
  
// })

// app.get('/get',function(req,res){

// 	res.send(set_val)
// })

// //step 5: upload images using curl command
// //step 6: push the images to a queue 

// app.post('/upload',[ multer({ dest: './uploads/'}), function(req, res){
  

//    if( req.files.image )
//    {
//    		//var name = req.files.image.name
// 	   fs.readFile( req.files.image.path, function (err, data) {
// 	  		if (err) throw err;
// 	  		var img = new Buffer(data).toString('base64');
	  		
// 	   client.rpush(items,img,function(err,reply){

// 	    });

// 	});
	   
// 	}
	

//    res.status(204).end()
// }]);


// //step 7: pop the most recent image and display on /meow
//  app.get('/meow', function(req, res) {


// 		client.rpoplpush(items,otherArray, function(err,reply){

// 	    });

// 		client.lrange(otherArray, 0, 0 , function(err,reply){

// 	    		display = reply
// 	    }); 
	
// 		 res.writeHead(200, {'content-type':'text/html'});
// 		 display.forEach(function(imagedata)
// 		 {

		
//    		res.write("<h1>\n<img src='data:image/jpg;base64,"+imagedata+"'/>");
   		
// 		});
//    	res.end();

// 	}
//  })

	app.get('/', function(req, res) {
  	res.send('hello world')
  	res.send(set_val)
})


// HTTP SERVER
var server = app.listen(PORT, function () {

var host = server.address().address
var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

