const router = require('express').Router();



router.use((req, res, next)=>{
	res.status(404).send('route not found')
})


module.exports = router;

