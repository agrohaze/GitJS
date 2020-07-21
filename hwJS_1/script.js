'use strict'
//           Task №1 

let age = prompt ('Введите Ваш возраст:')
if (age >= 0 && age <= 2 ) {
    document.write ('Ты - ребёнок:)')
} else if (age > 2 && age < 12) {
    document.write ('Молодой человек, тебе сюда : https://www.disney.com/ ')
} else if (age >= 12 && age <= 18) {
    document.write ('Ты - подросток, и возможно тебе нравится "творчество" Morgensterna!')
} else if  (age >= 18 && age <= 60) {
    document.write ('Вы - взрослый:(')
} else if (age >= 61) { 
    document.write ('Вы - пенсионер, держитесь!')
}


//           Task №2
