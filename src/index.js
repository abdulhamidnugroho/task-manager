const express = require('express')
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

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5f268bed8ce84e36c0444332')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById('5f268b26bf9bd636a8f3af55')
    await user.populate('tasks').execPopulate()
    // console.log(user.tasks)

}

main()