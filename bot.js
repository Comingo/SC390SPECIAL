const botconfig = require('./botconfig.js')
const weather = require("weather-js")
var VK = require("VK-Promise");
    vk = new VK(botconfig.token)

vk.init_longpoll();

vk.on("message", function(event, msg) {
  if(msg.body == '.дз'){
    msg.send("Д/З что вбиты в базу:")
    msg.send("Д/З на Вторник (02.09):\n\nРусск. Яз: РНО. \n\nИКП: параграф 2 читать.\n\nГеометрия: п. 11 вертикальные углы. задача 58.\n\nГеография: параграф 6.")
    msg.send("Д/З на Среду (03.09):\n\nИстория: параграф 5, термины в тетради.\n\nТехнология (у мальчиков): сообщение 'столярный инструмент' + стих.")
    msg.send("Д/З на Четверг (04.09):\n\nЛитература: проект 'о труде'")
    msg.send("Если информация не совсем верна, и вы хотите ее подкорректировать, пишите сюда: https://vk.com/douddle")
  }
});

vk.on("message", function(event, msg) {
  if(msg.body == '.погода'){
    weather.find({search: args.join[0], degreeType: 'C'}, function(err, result) {
  if (result === undefined || result.length === 0) {
        msg.send("Произошла неожиданная ошибка. Просьба написать сюда: https://vk.com/douddle")
  }
  var current = result[0].current;
      var location = result[0].location;
      msg.send(`Погода в пизде (взято за основу):\nТип температуры: ${location.degreetype}\nТемпература: ${current.temperature} градусов.\nОщущается как: ${current.feelslike} градусов.\nВлажность: ${current.humidity}%`)
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
