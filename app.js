const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')
const cors = require('cors')


app.use(cors())


app.use(bodyParser.json())
app.use(morgan('dev'))


app.use('/hogwarts', routes)

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.status || 500
  res.status(status).json({
    error: err
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Not Found'
    }
  })
})

const listener = () => `listening on port ${port}!`

app.listen(port, listener)
