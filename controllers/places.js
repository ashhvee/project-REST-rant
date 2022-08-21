const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'https://images.unsplash.com/photo-1617079114138-9cf245e006c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

module.exports = router