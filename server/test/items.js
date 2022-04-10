const chai=require("chai");
const chaiHttp=require("chai-http");
const app=require("../index.js");

const should = chai.should();


chai.use(chaiHttp);

describe("Items Test",()=>{
    it("should get all items",()=>{  

        chai.request(app).get("/items").end((err,res)=>{
            res.should.have.status(200);
            //res.body.should.be.a("array");
        });
        
    });

});