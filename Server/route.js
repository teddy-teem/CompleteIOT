const router = require("koa-router");
const healthController = require("./controller/healthController");
const iotController = require("./controller/iotController");
const routes = new router();

routes.get("/health", healthController.health);
routes.post("/receiveData", iotController.receiveData);

// routes.delete("/auth/:contactId", userController.remove);

module.exports = routes;
