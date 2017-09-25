const conn = require('./conn')
const Student = conn.define('student', {
	name:{
		type: conn.Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	email:{
		type: conn.Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {
			isEmail:true
		}
	}
})

module.exports = Student;