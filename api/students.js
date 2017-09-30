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
		.then(student => {
			res.send(student)
		})
			
})
