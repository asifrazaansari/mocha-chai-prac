const axios = require("axios")

class Student {
    constructor() {

    }

    home(type) {
        let data = this.getInfo(type, 1)
        return data + 5
    }

    userId() {
        return 12
    }

    getInfo(type, status) {
        return 10
    }

    finalMarks(total){
        let external = this.getExternal(total)
        let internal = this.getInternal(total)
        let final = external + internal + 10
        return final
    }

    getExternal(total){
        return total + 1
    }

    getInternal(total){
        return total - 1
    }

    dbData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 15000);
        })
    }
    thirdPartyApi(){
        return new Promise((resolve, reject) => {
            axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}


module.exports = Student