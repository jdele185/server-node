import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send({ msg: 'Heller There Juan de Leon!' })
})

app.listen(port)