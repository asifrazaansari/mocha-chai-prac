const sinon = require("sinon")
const expect = require("chai").expect
const Student = require("../controller/studentController")
const studentObj = new Student()


describe('--------spay check---------', () => {

    afterEach(() => {
        sinon.restore()
    })

    it('test user function', () => {
        expect(studentObj.userId()).to.be.equal(12)

    })

    it('function count', () => {
        const spyObj = sinon.spy(studentObj, "getInfo")
        studentObj.home(5)
        expect(spyObj.calledOnce).to.be.true
    })

    it('function argument check', () => {
        const spyObj = sinon.spy(studentObj, "getInfo")
        studentObj.home(5)
        expect(spyObj.calledWith(5,1)).to.be.true
    })


})
