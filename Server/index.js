require("dotenv").config();
const variables = require("./variables/index");

const koa = require("koa");
var cors = require('koa2-cors');
const koaBody = require("koa-body");
const router = require("./route");

const app = new koa();

app.use(koaBody());
app.use(router.routes());
app.use(cors());

app.listen(variables.appPort, () => {
  console.log(
    `Listening on ${variables.appHost}:${variables.appPort}, in ${variables.env}`
  );
});
