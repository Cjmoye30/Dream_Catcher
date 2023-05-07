const User = require('./User');
const Dreams = require('./dreams');

User.hasMany(Dreams, {
    foreignKey: 'user_id'
});

Dreams.belongsTo(User);


module.exports = { User, Dreams };
