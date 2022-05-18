var hello = require("./test2.js")
hello.name = "배지원"
hello.hello()
hello.test(function () {
    console.log("콜백 호출됨")

})