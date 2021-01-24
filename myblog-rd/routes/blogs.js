const { verifyToken } = require('../auth');
const controller = require('../controllers/blogController')
const router = require('koa-router')()
router.prefix('/blog')


router.get('/list', verifyToken, controller.welcome)

router.get("/detail", verifyToken, controller.getDetail);

router.post('/pusharticle', verifyToken, controller.saveArticle)

router.post('/comment',verifyToken,controller.saveComment)

module.exports = router
