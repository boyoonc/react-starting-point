const router = require('express').Router();
const {Campus} = require('../db')
module.exports = router;

router.get('/', (req, res, next)=>{
	return Campus.findAll()
		.then(campuses => {
			res.send(campuses)})
})

router.get('/:campusId', (req, res, next)=>{
	return Campus.findById(req.params.campusId)
		.then(campus => {
			res.send(campus)
		})
})