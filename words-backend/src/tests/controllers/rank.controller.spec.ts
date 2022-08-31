
import { StatusCodes } from "http-status-codes";
import supertest from "supertest";
import app from "../../app";

const request = supertest(app);


describe('Rank Controllers: ', () => {
    it("POST /rank : should return a rank matching the sent score", async () => {
        const res = await request.get("/api/v1/rank")
        expect(res.headers["content-type"]).toMatch("application/json");
        expect(res.statusCode).toEqual(StatusCodes.OK);
        expect(res.body.message).toMatch("Success");
        expect(res.body.data).toBeInstanceOf(Number);
    })
})