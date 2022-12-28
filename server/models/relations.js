const User = require('./users');
const Project = require('./projects');

function relation() {
    User.hasMany(Project, { foreignKey: 'User_id' });
    Project.belongsTo(User, { foreignKey: 'User_id' });
}

module.exports = {
    relation,
};
