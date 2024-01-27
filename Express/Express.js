//------------------------- [ create Express serever ]---------------------------------------

// const Express = require('express')
// const app = Express()

// app.get('/',(req,res) => {
//     res.send('Hello world')
// })

// app.listen(3000,()=> {
//     console.log('Server started');
// })


// ------------------------------------[ Request.query ]---------------------------------------------------
// * This usually refers to query parameters in the URL

// const express  = require('express')
// const app = express()

// app.get('./example', (req,res) => {
    
//     const name = req.query.name
//     const age = req.query.age

//     res.send(`hello, ${name} ! ypu are${age} years old`)
// })

// app.listen(2000, ()=>{
//     console.log('Server started');
// })

// -------------------------------[ Request.param ] ------------------------------------------

// const express = require('express')
// const app = express()

// app.get('/param/:userId', (req,res)=> {

//     const userId = req.params.userId
//     res.send(`<h1> USER ID : ${userId} <h1>`)
// })

// app.listen(3000)

// --------------------------------------[ App.use ]---------------------------------------

// app.use(function(req,res,next){
//     console.log('hello');
//     next()
// })






// //import package
// const express = require('express');
// const app = express();
// const path = require('path')

// // create a server
// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

// // Get
// app.get('/about', (req,res) => {
//     res.send("Heyyyyy")
// })


// // path file
// app.get('/signup', (req,res) => {
//     res.sendFile(path.join(__dirname, 'signup.html'))
// })

// app.post('/signup', (req,res) => {
//     res.send('<h1> Account Created <h1>')
// })


// app.listen(3000)


