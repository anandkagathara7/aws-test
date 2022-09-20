const express = require('express')
const router = express.Router()
const NodeCache = require('node-cache')

const myCache = new NodeCache()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.post('/:apiName', (req, res) => {
  myCache.set(req.params.apiName, req.body)
  res.send({
    message: 'added'
  })
})

router.get('/getAllFake', (req, res) => {
  const keys = myCache.keys()
  res.send({
    data: keys,
    message: 'success'
  })
})

router.get('/:apiName', (req, res) => {
  const data = myCache.get(req.params.apiName)
  if (!data) {
    res.send({
      data: [],
      message: 'not found any data'
    })
  }
  res.send({
    data,
    message: 'success'
  })
})
module.exports = router
