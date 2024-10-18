const express = require('express');
const app = express();
const port = 3333;
const axios = require('axios');
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: '*' }));

// wow, neato
app.get('/localhost-proxy', async (req, res) => {
  const yourApiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  const { data } = await axios.get(yourApiUrl);
  return res.send(data);
});

app.listen(port, () => {
  console.log(`Proxy listening on port http://localhost:${port}`);
});
