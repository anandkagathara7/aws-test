const express = require('express')
const router = express.Router()
const db = require('../database/models')
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.post('/:apiName', async (req, res) => {
  await db.customResponse.create({
    slug: req.params.apiName,
    response: req.body
  })
  res.send({
    message: 'added'
  })
})

router.get('/getAllFake', async (req, res) => {
  let data = await db.customResponse.findAll({
    attributes: ['slug']
  })
  data = data.map((item) => item.slug)
  res.send({
    data,
    message: 'success'
  })
})

router.get('/:apiName', async (req, res) => {
  const data = await db.customResponse.findOne({
    where: {
      slug: req.params.apiName
    }
  })
  if (!data) {
    res.send({
      data: [],
      message: 'not found any data'
    })
  } else {
    res.send({
      data: data.response,
      message: 'success'
    })
  }
})
module.exports = router
