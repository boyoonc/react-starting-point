const conn = require('./conn')
const Student = require('./Student')
const Campus = require('./Campus')


Student.belongsTo(Campus)
Campus.hasMany(Student)

const sync = ()=>{
	return conn.sync({force : true, logging: false})
};

const seed = ()=>{
	return Promise.all([
		Student.create({name: 'student a', email:'a@fs.com'}),
		Student.create({name: 'student b', email:'b@fs.com'}),
		Student.create({name: 'student c', email:'c@fs.com'}),
		Student.create({name: 'student d', email:'d@fs.com'}),
		Student.create({name: 'student e', email:'e@fs.com'}),
		Campus.create({name: 'campus 1'}),
		Campus.create({name: 'campus 2'}),
		Campus.create({name: 'campus 3'}),
		Campus.create({name: 'campus 4'})
		])
	.then(([a, b, c, d, e, c1, c2, c3, c4])=>{
		return Promise.all([
			a.setCampus(c1),
			b.setCampus(c2),
			c.setCampus(c3),
			d.setCampus(c4),
			e.setCampus(c4),
			])
	})
}

module.exports = {
	sync, seed, Student, Campus
}