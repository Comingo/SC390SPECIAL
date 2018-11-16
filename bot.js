const botconfig = require('./botconfig.js')
const date = require('date-and-time');
let now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
date.format(now, 'ddd MMM DD YYYY');        // => 'Fri Jan 02 2015'
date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 a.m. GMT+0000'
const weather = require("weather-js")
var VK = require("VK-Promise");
    vk = new VK(botconfig.token)

vk.init_longpoll();

vk.on("message", function(event,msg) {
  if(msg.body == '.старт') {
    msg.send("DOUDDLE'S INFINITY ONLINE\n\nПриватная услуга, обеспечивающая высококачественный бесперебойный вечный онлайн.\n\nТребуется всего-лишь токен профиля.\n\nvk.com/douddle");
      msg.send("Включено.");
        var botsetactivity = setInterval(function() {
            vk.account.setOnline();
                console.log("put1");
                   setTimeout(function(){
            vk.account.setOnline();
                    console.log("put2");
                }, 5000);
            }, 10000);
        };
    });
