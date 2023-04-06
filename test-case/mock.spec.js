const sinon = require("sinon")
const expect = require("chai").expect
const Student = require("../controller/studentController")
const studentObj = new Student()


describe('--------stub check---------', () => {

    it('count function', () => {
        const mock = sinon.mock(studentObj)
        
        const expect = mock.expects("getExternal")
        
        expect.exactly(1).withArgs(40)
        studentObj.finalMarks(40)

        mock.verify()
    })

})
