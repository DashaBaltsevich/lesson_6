'use strict';

function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}

const game = function () {
    let programmNum = parseInt((Math.random() * 100));
    console.log(programmNum);
    function start() {
        let num = prompt('Угадай число от 1 до 100');
        if (isNum(num)) {
            let num2 = +num;
            if (num2 < programmNum) {
                alert('Загаданное число больше');
                start();
            } else if (num2 > programmNum) {
                alert('Загаданное число меньше');
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
    };
    start();
};

game();

