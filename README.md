# simple-proxy

Example of creating a proxy with express.

### setup
1. `npm i`
2. `npm run dev`

### example proxy requests

1. your local computer makes request to 
   1. `http://localhost:3333/localhost-proxy`
2. The node server calls the API and returns the result

### more endpoints

POST
```js
app.post('/api/post-sample', async (req, res) => {
  const postParams = req.body;
  const yourApiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  const { data } = await axios.post(yourApiUrl, postParams);
  return res.send(data);
});
```

GET
```js
app.post('/api/get-sample', async (req, res) => {
  const { id } = req.query; // GET ?id=1 from url
   // use in request to real server
  const yourApiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const { data } = await axios.get(yourApiUrl);
  return res.send(data);
});
```

