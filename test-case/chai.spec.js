const chai = require("chai")
const assert = chai.assert
const should = chai.should()
const expect = chai.expect



const userName = "asif"

const product = {
    items: [{ "fruit": "mango" }, { "fruit": "apple" }]
}


describe('assert check', () => {

    it('check string', () => {
        assert.typeOf(userName, "string")
    })

    it('equal check', () => {
        assert.equal(userName, "asif")
    })

    it('length check', () => {
        assert.lengthOf(userName, 4, `${userName} value has a length ${userName.length}`);
    })


    it('length check of product', () => {
        assert.lengthOf(product.items, 2, `${product.items} value has a length ${product.items.length}`);
    })

})



describe('should check', () => {

    it('check string', () => {
        userName.should.be.a("string")
    })

    it('check equal', () => {
        userName.should.equal("asif")
    })


    it('check length', () => {
        product.should.have.property("items").with.lengthOf(2)
    })


})


describe('expect check', () => {

    it("string check", () => {
        expect(userName).to.be.a("string")
    })

    it("equal check", () => {
        expect(userName).to.equal("asif")
    })


    it("length check", () => {
        expect(product).to.have.property("items").with.lengthOf(2)
    })


    it("object check", () => {
        expect(product).to.have.keys("items")
    })


})

