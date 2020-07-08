const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello there')
})

app.listen(4444, () => {
    console.log('Server started on https://localhost:4444')
})

app.get('/greet', (req, res) => {
    let person = 'Guest'
    if (req.query.person)
        person = req.query.person
    res.send('Good Morning ' + person)
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})