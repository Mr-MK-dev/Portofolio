const { Sequelize } = require('sequelize');

const sql = new Sequelize('mk', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});

sql.authenticate()
    .then(() => {
        console.log(`DB AUTH`);
    })
    .catch((err) => {
        console.log(`DB err : `, err);
    });

module.exports = sql;
