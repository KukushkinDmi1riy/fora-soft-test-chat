const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hi Dima!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});