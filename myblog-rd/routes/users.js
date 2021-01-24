const router = require('koa-router')()
const controller = require('../controllers/userController')
router.prefix('/users')

router.post('/login', controller.login)

router.post('/regist', controller.regist)

router.get('/checkuser',controller.checkUser)

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
