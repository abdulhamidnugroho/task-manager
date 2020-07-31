require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5f241de1c5462a452826e67a').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})