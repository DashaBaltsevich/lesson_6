'use strict';

// function number() {
//     let programmNum = Math.ceil((Math.random() * 100));
//     let num1 = +prompt('Угадай число от 1 до 100');
//     console.log(programmNum, num1);
//     const game = function () {
//         if (num1 > programmNum) {
//         console.log('Загаданное число меньше');
//         return num1 === +prompt('Угадай число от 1 до 100');
//         }
//     }
//     one();

//     function two () {
//         if (num1 < programmNum) {
//         console.log('Загаданное число больше');
//         return num1 === +prompt('Угадай число от 1 до 100');
//         }
//     }
//     two();

//     const tree = function(num1) {
//         console.log('Введите число!');
//         return num1 === +prompt(!isNaN(parseFloat(num1)) && isFinite(num1));
//     };
//     tree();
// }
// number();

// function isString(num1) {
//     return num1 === +prompt('Угадай число от 1 до 100');
// }


// if (num1 > programmNum) {
//     console.log('Загаданное число меньше');
// } else if (num1 < programmNum) {
//     console.log('Загаданное число больше');
// } else if (!isNumber(num1)) {
//     console.log('Введите число!');
// } else {
//     console.log('Отмена');

    const game = function () {
        let programmNum = Math.ceil((Math.random() * 100));
        console.log(programmNum);
        
            function start () {
            let num1 = prompt('Угадай число от 1 до 100');
            let num2 = +num1;

                if (num1 === null) {
                    confirm('отмена');
                } 

                
                if (typeof num1 === 'string') {
                    confirm('введите число!');
                    return start();
                    }
                
                if (num2 > programmNum) {
                    confirm('Загаданное число меньше');
                    return start();
                    }
                if (num2 < programmNum) {
                    confirm('Загаданное число больше');
                    return start();
                    }
                if (num2 === programmNum) {
                    confirm('правильно');
                }
                
                else {
                    console.log('not');
                }
                
            }
            start();
            
    };
    game();

    





