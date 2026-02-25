const http = require('http')

const PORT = 3000

//Use to create basic http server take callback as an argument
const server = http.createServer(function listner(request,response){
  //This callback is listener that is going to collect every http request that we make to our server
  console.log(`Request Recieved`);
  
  //Create Route
  if (request.url==='/home') {
    console.log(request.method);
    response.end("Welcome Home")

    //Basically this is used to send large data
    //Like Audio aur video streaming in chunks and connection is open
    response.write(`First Response`)
    response.write(`Second Response`)
  }
});


server.listen(PORT,function exec(){
  console.log(`Server started at PORT ${PORT}`);
})

