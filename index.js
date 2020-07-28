const app = require('./app')
const socket = require('./socket')

const server = app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`)
})

socket(server)
