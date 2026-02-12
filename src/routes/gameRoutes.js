import express from 'express';

const router = express.Router();
import { getGames, createGame, updateGame, deleteGame } from '../controllers/gameController.js';

router.get('/', getGames);
router.post('/', createGame);
router.patch('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;