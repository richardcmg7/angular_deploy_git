path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + 'dist/my-app'));
app.get('/*', function(req,res){
	res.sendFile(path.join(__dirname, 'dist/my-app', 'index.html'))
	);
// Start the app by listening on the default Heroku port
// app.listen(process.env.PORT 11 8080);
