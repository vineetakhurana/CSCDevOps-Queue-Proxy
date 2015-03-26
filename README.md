The application is **main.js** I have set the server instance to listen on **localhost:3002**

##GET and SET

Set key "one" to value "vineeta"
Send a get request with key "one"

![setone] [set_one]

Access *localhost:3002/get* to see output as *vineeta*

![getone] [get_one]

Set key "two" to value "This message will self-destruct in 10 seconds"
Send a get request with key "two"

![settwo] [set_two]

![gettwo] [get_two]

Access *localhost:3002/get* to see the output as *This message will self-destruct in 10 seconds*

Set an expiration time for the key "two", in this case 10seconds
Send a get request with key "two"
Access localhost/get to see the value expired.

![expire] [expire]

![afterexpire] [after_expire]

##RECENT

Use of 'lpush' to push the request's URL to a queue and 'lrange' to get the 5 most recently visited URLs on localhost:3002
Access *localhost:3002/recent* which displays the 5 most recently visited sites.

![recent] [recent]

##UPLOAD and MEOW

##upload
The *curl* command used as per Workshop README to upload an image

![curl] [curl]

Use of 'rpush' to push all the images uploaded to a queue. 

###meow
'rpoplpush' command used to pop and hence remove the most recent image from the uploads queue onto another queue, used to display the image on accessing *localhost:3002/meow*

'lrange' command used to access the recent-most image in the destination queue in order to display the image on accessing *localhost:3002/meow*

![meow] [meow]

![meow2] [meow2]

##ADDITIONAL SERVER INSTANCE RUNNING

I have another server instance running on port 3001 accessible using **localhost:3001**. 
I replicated the functionality of main.js in **additional_main.js** and set the server to run on port 3001.

![3001] [3001]

![additional] [additional]

###DEMONSTRATE PROXY

**proxy.js**: It has the code for shifting load between localhost:3001 and localhost:3002 when a request is sent to *localhost*

On each request, obtain target location from the list of addresses and proxy to the relevant server,who is then placed at the end of the list.
Hence the requests to localhost are redirected to *localhost:3001* and *localhost:3002* by a simple round-robin load balancing strategy.

![proxy2] [proxy2]

![proxy] [proxy]


[set_one]: /images/get_one.PNG
[get_one]: /images/one_vineeta.PNG
[expire]: /images/expire.PNG
[after_expire]: /images/get_after_expire.PNG
[set_two]: /images/set_two.PNG
[get_two]: /images/get_two.PNG
[recent]: /images/recent.PNG
[curl]: /images/curl.PNG
[meow]: /images/meow.PNG
[meow2]: /images/meow2.PNG
[additional]: /images/additionalinstance.PNG
[3001]: /images/3001.PNG
[proxy]: /images/proxy.PNG
[proxy2]: /images/proxy_console.PNG
