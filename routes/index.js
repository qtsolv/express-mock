const express = require('express');
const users = require('./json/users.json');

const router = express.Router();

/* GET / */
router.get(
    '/',
    (req, res) => {
        res.send('OK');
    });

/* GET /users */
router.get(
    '/users',
    (req, res) => {
      res.json(users);
    });

module.exports = router;
