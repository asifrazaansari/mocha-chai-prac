const chai = require("chai")
const expect = chai.expect
const sinon = require("sinon")


describe('Hooks Check', () => {
    
    after(function(){
        console.log("===================last==============")
    })
   

    afterEach(function(){
        console.log("==after evrey test case==")
    })
    beforeEach(function(){
        sinon.restore()
        console.log("==before every test case==")
    })

    const data = "code"

    it("check string", function () {
        expect(data).to.be.a("string")
    })

    it("value", function(){
        expect(data).to.be.equal("code")
    })

    before(function(){
        console.log("===================first==============")
    })

})
