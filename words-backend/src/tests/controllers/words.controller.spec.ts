import { StatusCodes } from "http-status-codes";
import supertest from "supertest";
import app from "../../app";

const request = supertest(app);


describe('Words Controllers: ', () => {
    it("GET /words : should return list of wordObject", async () => {
        const res = await request.get("/api/v1/words")
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.statusCode).toEqual(StatusCodes.OK);
        expect(res.body.message).toMatch("Success");
        expect(res.body.data).toBeInstanceOf(Array);
    })
})