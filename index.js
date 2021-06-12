const express = require('express')
const path = require('path')
const { engine } = require('express-edge')

const app = express()
app.use(express.static('public'))
app.use(engine)
app.set('views', `${__dirname}/views`)

app.get('/',(req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/post', (req, res) => {
    res.render('post')
})
app.listen(3000, () => {
    console.log('App listening on Port 3000')
})
