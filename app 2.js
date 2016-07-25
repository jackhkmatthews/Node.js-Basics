//Problem: we need a simple way to look at a users badge count and javascript point
//solution: use node.js to connect to treehouses api to get profile informatino print out
var http = require("http");
var username = "chalkers";

function printMessage (username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
  console.log(message);
}

//connect to API url (http://teamtreehouse.com/username.json)

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
        console.log(response);
//read the data
  response.on('data', function(chunk){
    body += chunk;
  });
  response.on('end', function(){
    console.log(body);
  });
//parse the data
//print the data                   

                       
});

request.on("error", function(error){
  console.error(error.message);
}):