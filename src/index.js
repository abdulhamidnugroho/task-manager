const express = require('express')
const bcrypt = require('bcryptjs')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET request is disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status('503').send('Server is temporary down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'blink182' }, 'helloworldmornigg', { expiresIn: '10 second' })
    console.log(token)

    const data = jwt.verify(token, 'helloworldmornigg')
    console.log(data)
}

myFunction()