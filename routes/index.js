const { Router } = require('express');

const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const postRouter = require('./post.router');
const likeRouter = require('./like.router');
const followRouter = require('./follow.router');

const routerApi = (app) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/auth', authRouter);
  router.use('/posts', postRouter);
  router.use('/like', likeRouter);
  router.use('/follow', followRouter);
};

module.exports = routerApi;
