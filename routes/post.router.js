/* eslint-disable import/no-extraneous-dependencies */
const { Router } = require('express');
const passport = require('passport');
const PostService = require('../services/post.service');

const service = new PostService();
const router = Router();

const passportAuth = passport.authenticate('jwt', { session: false });

// const findAll = async (req, res) => {
//   const rta = await service.findAll();
//   res.status(200).json({ results: rta });
// };

const create = async (req, res) => {
  try {
    const { body } = req;
    const id = req.user.sub;
    const rta = await service.create(body, id);
    res.status(200).json(rta);
  } catch (error) {
    throw new Error(error);
  }
};

// router.get('/', passportAuth, findAll);
router.post('/', passportAuth, create);

module.exports = router;
