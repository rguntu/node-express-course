

const {people} = require('../data')

const getPeople = (req,res) => {
    res.status(200).json({success:true, data:people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false, message: "send name"})
    }
    res.status(201).send({success:true, data: [...people, name]})
}

const updatePerson = (req,res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find(p => p.id === Number(id))
    if(!person) {
        return res.status(400).json({success:false, message: `no person ${id}`})
    }
    const pList = people.map(p => {
        if(p.id === Number(id)) {
            p.name = name
        }
        return p
    })

    res.status(201).json({success:true, data:pList})

} 
const removePerson = (req, res) => {
    const {id} = req.params
    const person = people.find(p => p.id === Number(id))
    if(!person) {
        return res.status(400).json({success:false, message: `no person ${id}`})
    }
    const pList = people.filter(p => p.id !== Number(id))
    res.status(201).json({success:true, data:pList})

}

module.exports = {createPerson, getPeople, updatePerson, removePerson}