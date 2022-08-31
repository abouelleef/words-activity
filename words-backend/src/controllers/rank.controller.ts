import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import getRank from "../services/rank.service";


export const getRankController = asyncHandler(async (req, res, next) => {

    // Getting the score from the request body
    const score: number = req.body.score

    // Calculating the rank from the rank service
    const rank = getRank(score)

    // returning the required rank
    res.status(StatusCodes.OK).json({
        message: "Success",
        data: rank,
    })
})