const botconfig = require('./botconfig.js')
var VK = require("VK-Promise");
    vk = new VK(botconfig.token)

vk.init_longpoll();

vk.on("message", function(event, msg) {
  if(msg.body == '.дз'){
    msg.send("Д/З что вбиты в базу:")
    msg.send("Д/З на Понедельник (01.09):\n\nРусск. яз: 51 по заданию, тренинг.\n\nАлгебра:82\n\nБиология: параграф 4, р.т. номера 26, 27\n\nЛитература: 72-73 читать.")
    msg.send("Д/З на Вторник (02.09):\n\n ИКП: параграф 2 читать.\n\nГеометрия: п. 11 вертикальные углы. задача 58.\n\nГеография: параграф 6.")
    msg.send("Д/З на Среду (03.09):\n\n параграф 5, термины в тетради.\n\nТехнология (у мальчиков): сообщение 'столярный инструмент' + стих.")
    msg.send("Если информация не совсем верна, и вы хотите ее подкорректировать, пишите сюда: https://vk.com/douddle")
  }
})
