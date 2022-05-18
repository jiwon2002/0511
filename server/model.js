var { Sequelize } = require("sequelize")

global.User = sequelize.define("user", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }


})
global.Board = sequelize.define("Board", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    //제목
    title: Sequelize.STRING,
    //내용
    body: Sequelize.TEXT,
    //작성시간
    writeTime: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    ViewCount: {
        type: Sequelize.INTEGER,
        dafaultValue: 0
    }
})



sequelize.sync({
    alter: true
})