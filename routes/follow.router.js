/* eslint-disable import/no-extraneous-dependencies */
const { Router } = require('express');
const passport = require('passport');
const FollowService = require('../services/follow.service');

const service = new FollowService();
const router = Router();

const passportAuth = passport.authenticate('jwt', { session: false });

const create = async (req, res) => {
  try {
    const { userTo } = req.body;
    const userFrom = req.user.sub;
    const rta = await service.create(userTo, userFrom);
    res.status(200).json(rta);
  } catch (error) {
    throw new Error(error);
  }
};

router.post('/', passportAuth, create);

module.exports = router;
