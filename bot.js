const botconfig = require('./botconfig.js')
const date = require('date-and-time');
var VK = require("VK-Promise");
vk = new VK(botconfig.tokenfile);
   vk.auth({username: botconfig.phonefl, password: botconfig.passwordfl})

vk.init_longpoll();

vk.on("message", function(event,msg) {
  if(msg.body == '.старт') {
        let second = Math.floor(process.uptime());
        let rabota = Math.floor(process.uptime() / 60);
        let rabota2 = Math.floor(rabota / 60);
        let ostatok = rabota - (rabota2 * 60)
        let rabota3 = Math.floor(rabota2 / 24)
        let usedmemory = process.memoryUsage().rss / 1024 / 1024;
        let usedmemorybite = process.memoryUsage().rss / 1024 
        let dss = rabota2 - Math.floor(rabota3 * 24)
      
      msg.send("Включено.")
           function onlf(){
	    vk.account.setOnline().then(vk.status.set({text: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} КБ || ${rabota}`}));
            }
            setInterval(onlf, 20000)
        };
    });

vk.on("message", function(event,msg) {
  if(msg.body == '.статус') {
    msg.send("DOUDDLE | INFINITY ONLINE \n\nСтатус включен.")
      var botsetactivity = setInterval(function() {
        vk.status.set({text: `true lapse🌀`});
        console.log("status1");
        setTimeout(function(){
        vk.status.set({text: `de peace🌴`});
          console.log("status2");
        }, 60000);
      }, 120000);
    };
  });
