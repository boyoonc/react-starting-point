const conn = require('./conn')
const Campus = conn.define('campus', {
	name:{
		type: conn.Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	image:{
		type: conn.Sequelize.BLOB
	}
})

module.exports = Campus