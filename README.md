The application runs on localhost:3002

##GET and SET

Set key "one" to value "vineeta"

Send a get request with key "one"

Access localhost:3002/get to see output as *vineeta*

Set key "two" to value "This message will self-destruct in 10 seconds"

Send a get request with key "two"

Access localhost:3002/get to see the output as *This message will self-destruct in 10 seconds*

Set an expiration time for the key "two", in this case 10seconds

Send a get request with key "two"

Access localhost/get to see the value expired.

##RECENT

Use of 'lpush' to push the request's URL to a queue and 'lrange' to get the 5 most recently visited URLs on localhost:3002

Access localhost:3002/recent which displays the 5 most recently visited sites.

##UPLOAD and MEOW


