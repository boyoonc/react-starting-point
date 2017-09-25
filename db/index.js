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
		Student.create({name: 'a', email:'a@fs.com'}),
		Student.create({name: 'b', email:'b@fs.com'}),
		Student.create({name: 'c', email:'c@fs.com'}),
		Student.create({name: 'd', email:'d@fs.com'}),
		Student.create({name: 'e', email:'e@fs.com'}),
		Campus.create({name: 'c1'}),
		Campus.create({name: 'c2'}),
		Campus.create({name: 'c3'}),
		Campus.create({name: 'c4'})
		])
	.then(([a, b, c, d, e, c1, c2, c3, c4])=>{
		return Promise.all([
			a.setCampus(c1),
			b.setCampus(c2),
			c.setCampus(c3),
			d.setCampus(c4),
			e.setCampus(c4),
			// c1.addStudent(a),
			// c2.addStudent(b),
			// c3.addStudent(c),
			// c4.addStudent(d),
			// c4.addStudent(e)
			])
	})
}

module.exports = {
	sync, seed, Student, Campus
}