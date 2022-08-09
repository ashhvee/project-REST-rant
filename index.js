// Require node modules
const express = require('express')

// Initialize app
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000)

