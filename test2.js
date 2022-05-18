var hello = {
    name: "",
    hello: function () {
        console.log("hello" + this.name)

    },
    test: function (callback) {
        setTimeout(callback, 3000)

    }

}
module.exports = hello