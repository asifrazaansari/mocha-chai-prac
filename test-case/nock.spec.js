const chai = require("chai")
const expect = chai.expect
const Student = require("../controller/studentController")
const studentObj = new Student()
const nock = require("nock")


describe('--------nock check---------', () => {

    it("api test", function (done) {
        const obj = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          }

        const apiHit = nock("https://jsonplaceholder.typicode.com")
        .get("/todos/1")
        .reply(200, obj)

        studentObj.thirdPartyApi()
        .then(function(record){
            expect(record).to.be.eql(obj)
            done()
        })
        .catch(err => {
            done(new Error("error:- "+ error))
        })

    })

})
