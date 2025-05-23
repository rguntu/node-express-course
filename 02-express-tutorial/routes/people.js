const express = require('express')

const router = express.Router()
const {createPerson, getPeople, updatePerson, removePerson} = require('../controllers/people')



// router.get('/', getPeople)
// router.post('/', createPerson)
// router.delete('/:id', removePerson)
// router.put('/:id', updatePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(removePerson)


module.exports = router
