const variables = require("../variables");
const koa = require("koa");
const app = new koa();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
let data = { temp: 0, hum: 0, time: [], water_need: 0, dark: 0 };
let command = "OFF";
let prevData = 0;
const PORT = 8080;

exports.receiveData = ctx => {
  data = ctx.request.body;
  console.log(
    `${data.count + 1}.>>>>>>>>>>>>>>>Temperature: ${data.temp},Humidity: ${
      data.hum
    }, \nNeed Water? ${data.water_need}, \nDark Room: ${
      data.dark
    }<<<<<<<<<<<<<<`
  );
  ctx.body = "ok";
};

io.on("connection", socket => {
  console.log("new client connected: ", socket.id);

  socket.on("OnData", data => {
    // console.log("===>>>>>data receiveData", data);
    if (data !== prevData) {
      socket.broadcast.emit("IOTData", data);
      // console.log("===>>>>>emmit fired for IOTData", data);
      prevData = data;
    }
  });

  socket.on("LEDControlSendToIOT", function (data, callback) {
    if (data) {
      socket.broadcast.emit("LEDControl", String(data));
      console.log("===>>>>> emmit Fired for LEDControl");
      console.log("===>>>>>Data from App", String(data));
      return callback("pass");
    } else {
      return callback("fail");
    }
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("LEDControl", "OFF");
    socket.broadcast.emit(
      "IOTData",
      ({ temp: 0, hum: 0, time: [], water_need: 0, dark: 0 })
    );
    console.log("Someone has been disconnected"); // world
  });
});

http.listen(PORT, () => {
  console.log(`listening on (For Real Time) *:${PORT}`);
});
