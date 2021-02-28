import express from 'express';
const router = express.Router();

import * as usrService from './user.service.mjs'

// POST requests
router.post('/user/authenticate', authenticate);
router.post('/user/register', register);
// GET requests
router.get('/user/', getAll);
router.get('/user/current', getCurrent);
router.get('/user/:id', getById);
// PUT requests
router.put('/user/:id', update);
// DELETE requests
router.delete('/user/:id', deleteUser);

export default router;

function authenticate(req, res, next) {
    usrService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({message: 'Email or password is incorrect'}))
    .catch(err => next(err));
}

function register(req, res, next) {
    usrService.createUser(req.body)
        .then((user) =>  {
            res.json(user)
        }).catch(err => next(err));
}

function getAll(req, res, next) {
    usrService.getAllUser()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    if (req.user) {
        usrService.getUserById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(400))
        .catch(err => next(err));
    } else {
        res.sendStatus(404);
    }
}

function getById(req, res, next) {
    usrService.getUserById(req.query.id)
        .then(user => user ? res.json(user) : res.sendStatus(400))
        .catch(err => next(err));
}

function update(req, res, next) {
    usrService.update(req.query.id, req.body)
        .then(() => res.json())
        .catch(err => next(err));
}

function deleteUser(req, res, next) {
    usrService.deleteUser(req.query.id)
        .then(() => res.json())
        .catch(err => next(err));
}

