require('./utils/auth');
const express = require('express');
const { port } = require('./config');
const routerApi = require('./routes');

const app = express();
app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log(`Runing in http://localhost:${port}`);
});
