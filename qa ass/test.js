const chai = require("chai");
const chaiHttp = require('chai-Http');
const { response } = require("express");
const app = require('../app');
const { expect } = chai;
chai.should();


chai.use(chaiHttp);

describe("App", () => {

    function invokeGetCall(url) {
        chai.request(app)
            .get(url)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('Object');
                res.text.should.be.equal("Sorry. We couldn't find that route.");
                console.log(res.text);
            })

    }
    function invokePostCall(param) {
        chai.request(app)
            .post('/comparison')
            .send(param)
            .end((err, res, body), function () {
                if (param.param1 && !param.param2) {
                    res.should.have.status(400);
                    res.text.should.include(`param2 is missing`);
                    console.log(res.text);

                }
                else if (param.param1 && param.param2) {
                    if (param.param1 < param.param2) {
                        res.should.have.status(200);
                        res.text.should.include(`param1 (${param.param1}) is less than param2 (${param.param2})`);
                        console.log(res.text);
                    }
                    else if (param.param1 > param.param2) {
                        res.should.have.status(200);
                        res.text.should.include(`param1 (${param.param1}) is greater than param2 (${param.param2})`);
                        console.log(res.text);
                    }
                    else if (param.param1 === param.param2) {
                        res.should.have.status(200);
                        res.text.should.include(`param1 (${param.param1}) is equal to param2 (${param.param2})`);
                        console.log(res.text);
                    }

                }
                else
                {
                    res.should.have.status(200);
                    res.text.should.include(`param1 is missing`);
                    console.log(res.text);
                }
            })
    }

    /**
       * Test the GET route
       */
    describe("GET/ ", () => {
        it("should get Welcome message", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('Object');
                    res.text.should.be.equal("Welcome to the Woebot QA Engineer REST API!");
                    //console.log(res.text);
                    done();
                })
        })
        it("should get graceful message at invalid request", (done) => {
            let url = '/api/';
            invokeGetCall(url);
            done();
        })
        it("should get graceful message on not passing param and with get method", function (done) {
            let url = '/comparison';
            invokeGetCall(url);
            done();
        })

    })
    /**
     * Test the POST route
     */
    describe("POST/ ", () => {
        it("should give correct message when param1 and param2 are present", (done) => {
            var param = { param1: '10', param2: '20' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is less than param2 (${param.param2})`);
                    done();
                })
        })
        it("should give correct message when param1 is null and param2 are present", (done) => {
            const param = { param1: null, param2: '20' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is less than param2 (${param.param2})`);
                    done();
                })
        })
        it("should give correct message when param1 is undefined and param2 are present", (done) => {
            const param = { param2: '20' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(400);
                    res.text.should.include("param1 is missing");
                    done();
                })
        })
        it("should give correct message when param1 is present and param2 not present", (done) => {
            const param = { param1: null };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(400);
                    res.text.should.include("param2 is missing");
                    done();
                })
        })
        it("should give correct message when param1 and param2 are not present", (done) => {
            const param = {};
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(400);
                    res.text.should.include("param1 is missing");
                    done();
                })
        })
        it("should give correct message when param1 and param2 are present, but undefined", (done) => {
            const param = { param1: undefined, param2: undefined };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(400);
                    res.text.should.include("param1 is missing");
                    done();
                })
        })
        it("should give correct message when body not present", (done) => {
            //const param = { };
            chai.request(app)
                .post('/comparison')
                // .send(param)
                .end((err, res, body) => {
                    res.should.have.status(400);
                    res.text.should.include("param1 is missing");
                    done();
                })
        })
        it("should give correct message when param 1 is greater than param 2", (done) => {
            const param = { param1: '50', param2: '-1' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is greater than param2 (${param.param2})`);
                    //console.log(res.text)
                    done();

                })
        })
        it("should give correct message when param 1 is equal to param 2", (done) => {
            const param = { param1: '-20', param2: '-20' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is equal to param2 (${param.param2})`);
                    //console.log(res.text)
                    done();

                })
        })
        it("should give correct message when param 1 is equal to param 2 but are of different data types", (done) => {
            const param = { param1: '34.99', param2: "34.99" };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is equal to param2 (${param.param2})`);
                    //console.log(res.text)
                    done();

                })
        })
        it("should give correct message when param 1 is blooean and param 2 is integer", (done) => {
            const param = { param1: 'False', param2: '0' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is greater than param2 (${param.param2})`);
                    //console.log(res.text)
                    done();

                })
        })
        it("should give graceful message when param1 and param2 are present and values are alphabets", (done) => {
            const param = { param1: 'f', param2: 'z' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is less than param2 (${param.param2})`);
                    done();
                })
        })
        it("should give graceful message when param1 and param2 are present and values are symbols", (done) => {
            const param = { param1: '.', param2: '/' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is less than param2 (${param.param2})`);
                    //console.log(res.text)
                    done();

                })
        })
        it("should give correct message when param 1 is an integer and greater than param 2 which is an alphabet", (done) => {
            const param = { param1: 'F', param2: '50' };
            chai.request(app)
                .post('/comparison')
                .send(param)
                .end((err, res, body) => {
                    res.should.have.status(200);
                    res.text.should.include(`param1 (${param.param1}) is greater than param2 (${param.param2})`);
                    //console.log(res.text)
                    done();

                })
        })

    })

    /**
     * Test the default
     */

})