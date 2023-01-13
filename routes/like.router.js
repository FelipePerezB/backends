/* eslint-disable import/no-extraneous-dependencies */
const { Router } = require('express');
const passport = require('passport');
const LikeService = require('../services/like.service');

const service = new LikeService();
const router = Router();

const passportAuth = passport.authenticate('jwt', { session: false });

const create = async (req, res) => {
  try {
    const { postId } = req.body;
    const userId = req.user.sub;
    const rta = await service.create(postId, userId);
    res.status(200).json(rta);
  } catch (error) {
    throw new Error(error);
  }
};

router.post('/', passportAuth, create);

module.exports = router;
