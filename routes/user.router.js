/* eslint-disable import/no-extraneous-dependencies */
const { Router } = require('express');
const passport = require('passport');
const UserService = require('../services/user.service');

const service = new UserService();
const router = Router();

const passportAuth = passport.authenticate('jwt', { session: false });

const findAll = async (req, res) => {
  const rta = await service.findAll();
  res.status(200).json({ results: rta });
};

const create = async (req, res) => {
  try {
    const { body } = req;
    const rta = await service.create(body);
    res.status(200).json({ results: rta });
  } catch (error) {
    throw new Error(error);
  }
};

router.get('/', passportAuth, findAll);
router.post('/', create);

module.exports = router;
