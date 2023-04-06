const chai = require("chai")
const expect = chai.expect
const Student = require("../controller/studentController")
const studentObj = new Student()
const chaiHttp = require("chai-http")



chai.use(chaiHttp)


describe('--------Task api---------', () => {

    it("get user", function(done) {
        chai.request("https://jsonplaceholder.typicode.com")
        .get("/todos/1")
        .end((err, res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.have.all.keys("userId", "title", "completed", "id")
            done()
        })
    })

})
