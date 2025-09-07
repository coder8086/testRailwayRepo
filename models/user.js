// ---------- models/user.js ----------
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
id: {
type: DataTypes.INTEGER.UNSIGNED,
autoIncrement: true,
primaryKey: true
},
name: {
type: DataTypes.STRING(100),
allowNull: false
},
email: {
type: DataTypes.STRING(150),
allowNull: false,
unique: true,
validate: {
isEmail: true
}
},
age: {
type: DataTypes.INTEGER,
allowNull: true
}
}, {
tableName: 'users',
timestamps: true
});


return User;
};