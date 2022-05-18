var express = require('express');
var router = express.Router();

router.post("/write", async function (req, res) {
    await Board.create(req.body)
    res.json({
        result: "ok"
    })
})
router.get("/list", async function (req, res) {

    var page = req.body.page
    if (!page) {
        page = 1
    }
    var itemPerPage = 5
    var offset = (page - 1) * itemPerPage
    var boardList = await Board.findAll({
        limit: itemPerPage,
        offset: offset,
        orders: [["writeTime", "DESC"]]
    })
    var count = await Board.count()
    var pageCount = Math.cell(count / itemPerPage)


    res.json({
        boardList: boardList,
        pageCount: pageCount
    })
})

module.exports = router;
