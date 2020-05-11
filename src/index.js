import Koa from 'koa'
import baseRouter from './controller/text'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

app.use(bodyParser())
app.use(baseRouter.routes())

app.listen(8011)
console.log('the server is running at port 8011 \nhttp://localhost:8011')
