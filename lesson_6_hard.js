'use strict';

function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}


const game = function () {
    let programmNum = parseInt((Math.random() * 100));
    console.log(programmNum);

    let numAttempt = 10;

    function start() {
        let num = prompt('Угадай число от 1 до 100');
        
        if (isNum(num)) {
            let num2 = +num;
            numAttempt--;
            if (numAttempt === 10) {
                alert('Осталось попыток: ' + numAttempt);
            } else if (numAttempt <= 1) {
                alert('Попытки закончились. Вы проиграли.');
                game();
            }
                

            if (num2 < programmNum) {
                alert('Загаданное число больше. У вас осталось ' + numAttempt + ' попытки');
                start();
            } else if (num2 > programmNum) {

                alert("Загаданное число меньше. У вас осталось " + numAttempt + ' попытки');
                start();
            } else {
                if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                    start();
                } else {
                    alert('Вы завершили игру');
                }
            }
        } else if (num === null) {
            alert('Вы завершили игру');
        } else {
            alert('Введите число!');
            start();
        }
    }
    start();
};

game();

// let numAttempt = 3;
// if (numAttempt < 4) {
//     numAttempt = numAttempt--;
//     alert('Осталось ' + numAttempt + ' попыток');
//     start();
// } else {
//    if (alert('Попытки закончились, хотите сыграть еще?')) {
//        start();
//    }else {
//        alert('Вы завершили игру.')
//    }
// }