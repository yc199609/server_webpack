import 'body-parser'

import koaRouter from 'koa-router'

const router = koaRouter()

router.get('/api/test', async(ctx, next) => {
    const result = {
        code: 0,
        msg: '成功',
        data: {
            test: 'ok'
        }
    }
    ctx.body = result
})

export default router
