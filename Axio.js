const express = require('express');
const axios = require('axios');
const app = express();

app.get('/numbers', async (req, res) => {
  try {
    const urls = req.query.url;
    const responses = await Promise.all(urls.map(url => axios.get(url)));
    const numbers = responses.map(response => response.data); 
    res.json(numbers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 3001;
app.listen(port, () => console.log(`numbers port ${port}!`));

