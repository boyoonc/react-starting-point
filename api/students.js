const router = require('express').Router();
const { Student, Campus } = require('../db');
module.exports = (router);

router.get('/', (req, res, next)=>{
	return Student.findAll(
		{
			include: [{model: Campus}]
		}
	)
		.then(students => {
			res.send(students)
		})

})

router.post('/', (req, res, next)=> {
	return Student.create(req.body)
		// .then(student => {
		// 	res.send(student)
		// })
		.then(newStudent => newStudent.id)
		.then(newStudentId => {
			console.log('*******now that i think about it shouldnt this work anyway?')
			console.log(newStudentId)
			return Student.findAll({where: {id: newStudentId}, include: [{model:Campus}]})
		})
		.then(studentWithCampus => {
			console.log(studentWithCampus)
			res.send(studentWithCampus)
		})

			
			
})
