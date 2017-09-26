const router = require('express').Router();
const { Student, Campus } = require('../db');
module.exports = (router);

router.get('/', (req, res, next)=>{
	console.log('HELLO? sdkfjhalskdjfhlkjhs')
	return Student.findAll(
	{
		include: [{model: Campus}]
	}
	)
		.then(students => {
			res.send(students)
		})

})

