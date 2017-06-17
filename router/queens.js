const express = require(`express`);

const endpoints = require(`endpoints/queens`);

const router = express.Router();

router.get(`/`, endpoints.getQueens);
router.get(`/congeniality`, endpoints.getCongeniality);
router.get(`/winners`, endpoints.getWinners);
router.get(`/:id`, endpoints.getQueenById);

router.post(`/create`, endpoints.create);
router.put(`/:id/update`, endpoints.update);
router.delete(`/:id/delete`, endpoints.delete);

module.exports = router;
