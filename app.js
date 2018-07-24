const express = require('express')
const cors = require('cors')
const data = require('./data')
const port = parseInt(process.env.PORT || 8000)

const app = express()
app.use(cors())

function students(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

app.get('/', (request, response) => {
  response.json({ data })
})

app.get('/:id', (request, response) => {
  let student = students(data, request.params.id)

  if (!student) {
    response.status(404).json({
      error: {
        message: "No record found!"
      }
    })
  } else {
    response.json({
      data: student
    })
  }
})

app.listen(port, () => 
  console.log('listening on port', port))