const botconfig = require('./botconfig.js')
const weather = require("weather-js")
var VK = require("VK-Promise");
    vk = new VK(botconfig.token)

vk.init_longpoll();

vk.on("message", function(event, msg) {
  if(msg.body == '.дз'){
    msg.send("Д/З что вбиты в базу:")
    msg.send("Д/З на Понедельник (01.09):\n\nРусск. яз: 51 по заданию, параграф 9 тренинг.\n\nАлгебра: Вся теория, 82\n\nБиология: параграф 4, р.т. номера 26, 27\n\nЛитература: 72-73 читать, задание 1.")
    msg.send("Д/З на Вторник (02.09):\n\n ИКП: параграф 2 читать.\n\nГеометрия: п. 11 вертикальные углы. задача 58.\n\nГеография: параграф 6.")
    msg.send("Д/З на Среду (03.09):\n\n параграф 5, термины в тетради.\n\nТехнология (у мальчиков): сообщение 'столярный инструмент' + стих.")
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
      msg.send(`Погода в Санкт-Петербурге (взято за основу):\nТип температуры: ${location.degreetype}\nТемпература: ${current.temperature} градусов.\nОщущается как: ${current.feelslike} градусов.\nВлажность: ${current.humidity}%`)
      if(err) console.log(err);
     })
    }
});

vk.on("message", function(event, msg) {
  if(msg.body == '.помощь'){
    msg.send("Команды:\n\n.дз - домашнее задание, что вбито в базу (обновляется раз в сутки)\n\n.погода - погода в Санкт-Петербурге (город взят за основу, в дальнейшем сделаю для всех городов.)")
  }
})
