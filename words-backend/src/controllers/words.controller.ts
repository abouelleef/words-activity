import asyncHandler from "express-async-handler";
import { StatusCodes } from "http-status-codes";
import getWords from "../services/words.service";


export const getWordsController = asyncHandler(async (req, res, next) => {

    // Getting the random list of words from the words service
    const words = getWords()

    // Responding with the list of words
    res.status(StatusCodes.OK).json({
        message: "Success",
        count: words.length,
        data: words,
    })
})