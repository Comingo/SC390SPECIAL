const botconfig = require('./botconfig.js')
var VK = require("VK-Promise");
    vk = new VK(botconfig.token)

vk.init_longpoll();

vk.on("message", function(event, msg) {
  if(msg.body == 'v!test'){
    msg.send("Д/З на Понедельник:\n\ntest 1 successful")
  }
})
