const chai = require("chai")
const sinon = require("sinon")
const expect = chai.expect
const Student = require("../controller/studentController")
const studentObj = new Student()
const chaiAsPromise = require("chai-as-promised")

chai.use(chaiAsPromise)


describe('--------promise check---------', () => {

    it("Normal value function", function (done) {
        //expect(studentObj.dbData()).to.be.equal(10)
        this.timeout(0)
        studentObj.dbData().then((result) => {
            expect(result).to.be.equal(10)
            done()
        })
    })

    it("package value function", function () {
        this.timeout(0)
        return expect(studentObj.dbData()).to.eventually.equal(10)

    })

})
