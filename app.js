const fs = require('fs');
const express = require('express');
const contentful = require('contentful');
const app = express();
const client = contentful.createClient({
    space: '56euqj26ftd9',
    accessToken: 'NVUyKttt2nGxq_37QBc0sTg3UT9B2haI364St62xgUc',
});
const port = process.env.PORT || 8080;

app.listen(port, () => {
    try { console.log('Server activated🍎'); } 
    catch { console.log('Server Error!!'); }
});
app.get('/api/contents', (req, res) =>  {
  return client.getEntries().then(response => {
      res.json(response);
  });
});