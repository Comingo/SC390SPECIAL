const botconfig = require('./botconfig.js')
var date = new Date()
var current_hour = date.getHours()
const weather = require("weather-js")
var VK = require("VK-Promise");
    vk = new VK(botconfig.token)

vk.init_longpoll();

vk.on("message", function(event, msg) {
  if(msg.body == '.дз'){
    msg.send(`Д/З что вбиты в базу: (последняя проверка: ${current_hour}`)
    msg.send("Д/З на Пятницу (05.10):\n\nАнгл.яз: слова, все про PAST SIMPLE, стр 18.\n\nГеометрия: номер 66(в), 68\n\nГеография: параграф 6\n\nФизика: параграфы 1-13 повторить.")
    msg.send("Тренажер по алгебре: https://pp.userapi.com/c848536/v848536529/88692/tWmjMsevO6Y.jpg")
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
      msg.send(`Погода в Санкт-Петербурге (последняя проверка в: ${current_hour}):\n\nТип температуры: ${location.degreetype}\nТемпература: ${current.temperature} градусов.\nОщущается как: ${current.feelslike} градусов.\nВлажность: ${current.humidity}%`)
      if(err) console.log(err);
     })
    }
});
    
    //Меня заставили    

vk.on("message", function(event,msg) {
    if(msg.body == '.сосать'){
        msg.send("Я люблю чупа-чупсы! А ты? ;-)")
    }
})

    //Больше не заставляли..

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
