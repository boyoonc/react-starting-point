const router = require('express').Router();
const {Campus} = require('../db')
module.exports = router;

router.get('/', (req, res, next)=>{
	console.log('im here********akjshflakjshflksjhdf')
	return Campus.findAll()
		.then(campuses => {
			res.send(campuses)})
})