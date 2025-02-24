// Create web server and listen on port 3000
const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({ comments: [] });
});

app.listen(3000, () => {
  console.log('Comments service is running on port 3000');
});
