const express = require('express');
const ngApp = express();
ngApp.use(express.static('./dist/my-app'));
ngApp.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/my-app/'})});
  ngApp.listen(process.env.PORT || 8080);
