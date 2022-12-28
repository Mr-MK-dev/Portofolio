const app = require('./app');

const mysql = require('./models/index');

// Implement relations
const relations = require('./models/relations.js');
relations.relation();
// const user1 = await User.create()

mysql
    .sync()
    .then(() => {
        console.log(`DB connecd`);
    })
    .catch((err) => {
        console.log(`DB 2 Error Sync`, err);
    });

app.listen(5050, () => {
    console.log(`DON;😒`);
});
