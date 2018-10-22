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

vk.on("message", function(event, msg) {
  if(msg.body == '.дз'){
    msg.send(`Д/З что вбиты в базу: (последняя проверка: ${now})`)
    msg.send("Д/З на Вторник (23.10):\n\nРусский язык: задание в тетради, упражнение 99 по образцу, 94.\n\nГеометрия: 94,95\n\nАнглийский язык: р.т стр. 16\n\nИКП: п.4, дорисовать схемы.")
    msg.send("Если информация не совсем верна, и вы хотите ее подкорректировать, пишите сюда: https://vk.com/douddle")
  }
});

vk.on("message", function(event, msg) {
  if(msg.body == '.погода'){
    weather.find({search: 'Питер', degreeType: 'C'}, function(err, result) {
  if (result === undefined || result.length === 0) {
        msg.send("Произошла неожиданная ошибка. Просьба написать сюда: https://vk.com/douddle")
  }
  var current = result[0].current;
      var location = result[0].location;
      msg.send(`Погода в Санкт-Петербурге (последняя проверка в: ${now}):\n\nТип температуры: ${location.degreetype}\nТемпература: ${current.temperature} градусов.\nОщущается как: ${current.feelslike} градусов.\nВлажность: ${current.humidity}%`)
      if(err) console.log(err);
     })
    }
});
    
vk.on("message", function(event,msg) {
  if(msg.body == '.рандом'){
    msg.send(`Выпало: ${Math.floor(Math.random() * 2) == 0 ? "ОРЕЛ! }:)" : "РЕШКА! }:)"}`)
  }
})

vk.on("message", function(event, msg) {
  if(msg.body == '.помощь'){
    msg.send("Команды:\n\n.дз - домашнее задание, что вбито в базу (обновляется раз в сутки)\n\n.погода - погода в Санкт-Петербурге (город взят за основу, в дальнейшем сделаю для всех городов.)\n\n.рандом - орёл или решка? хмм... }:)")
  }
})
