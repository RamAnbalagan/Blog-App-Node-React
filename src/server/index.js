require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('epilogue');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite',
});

const Post = database.define('posts', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
});

epilogue.initialize({ app, sequelize: database });

epilogue.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id'],
});

const port = process.env.SERVER_PORT || 3023;

database.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
