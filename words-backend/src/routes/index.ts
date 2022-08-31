import { Router } from 'express';
import { getRankController } from '../controllers/rank.controller';
import { getWordsController } from '../controllers/words.controller';
import { scoreValidation } from '../middlewares/validation/score.validation';


// Global app router

const indexRouter = Router();

// Health Check endpoint
indexRouter.get("/ping", (req, res, next) => { res.status(200).send("pong") });

// Words endpoint
indexRouter.get("/words", getWordsController);

// Rank endpoint
indexRouter.post("/rank", scoreValidation, getRankController)

export default indexRouter;
