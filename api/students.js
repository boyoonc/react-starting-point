
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
		.catch(next)

});

router.post('/', (req, res, next)=> {
	return Student.create(req.body)
		.then(newStudent => newStudent.id)
		.then(newStudentId => {
			return Student.findAll({where: {id: newStudentId}, include: [{model:Campus}]})
		})
		.then(studentWithCampus => {
			res.send(studentWithCampus)
		})
		.catch(next)
		
});

router.put('/', (req, res, next)=>{
	return Student.findById(req.body.id)
		.then(foundStudent =>{
			foundStudent.name = req.body.name
			foundStudent.email = req.body.email
			foundStudent.campusId = req.body.campusId
			return foundStudent.save()
		})
		.then(updatedStudent => {
			Student.findAll({include: [{model:Campus}]})
				.then(allStudents => {
				console.log('*******************')
				res.send(allStudents)})
		})
		
})


router.delete('/:studentId', (req, res, next)=> {
	const studentId = parseInt(req.params.studentId)
	return Student.destroy({where: {id: studentId}})
		.then(()=> res.sendStatus(204))
		.catch(next)
})