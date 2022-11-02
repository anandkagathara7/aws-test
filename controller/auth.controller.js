const data = [
  {
    id: 1,
    userName: 'prash',
    password: 'asdfgh'
  },
  {
    id: 2,
    userName: 'test',
    password: 'testtest'
  },
  {
    id: 3,
    userName: 'okay',
    password: 'okayokay'
  }
]

const getMe = async (req, res) => {
  console.log('hello')
  res.send('hello')
}
const signup = (req, res, next) => {
  console.log('body---', req.body)
  // const { email, name, } = req.body
  res.status(201).json({
    data: {
      id: Math.floor(Math.random() * 90 + 10),
      firstName: req.body.firstName,
      userName: req.body.userName
    },
    message: 'success signup'
  })
}

const login = (req, res, next) => {
  const findOne = data.find((item) => item.userName === req.body.userName && item.password === req.body.password)
  res.status(201).json({
    data: findOne,
    message: 'success login'
  })
}

module.exports = {
  signup,
  login,
  getMe
}
