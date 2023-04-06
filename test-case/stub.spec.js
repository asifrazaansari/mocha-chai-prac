const sinon = require("sinon")
const expect = require("chai").expect
const Student = require("../controller/studentController")
const studentObj = new Student()


describe('--------stub check---------', () => {

    it('function argument check', () => {
        const stub = sinon.stub(studentObj, "getExternal")
        
        stub.withArgs(40).returns(5)
        expect(studentObj.finalMarks(40)).to.be.equal(54)
    })

})
