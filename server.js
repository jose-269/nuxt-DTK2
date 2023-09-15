const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./dist', {
  maxAge: `${60*60}` 
}))

var compress = require('compression');
app.use(compress()); 

app.use('/', express.static('./dist/', { redirect: false }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Incentive frontend is listening on ${PORT}`);
});