document.write('<b>Вивести на сторінку в один рядок через кому числа від 10 до 20:</b><br><br>');

let num1=10;
let num2=21;

for(let i=num1; i < num2; i++) {
    if (i == num2-1) {
        document.write(i = num2-1)
    }
    else {
        document.write(i + ", &nbsp;" )
    }
} 
document.write('<br><br>');


document.write('<b>Вивести квадрати чисел від 10 до 20:</b><br><br>');

for (i = num1; i < num2; i++) {
    if (i == num2 - 1) {
        document.write(i ** 2);
    } else {
        document.write(i**2 + ", &nbsp;");
    }
}
    document.write('<br><br>');



document.write('<b>Вивести таблицю множення на 7:</b><br><br>');

let num3 = 1;
let num4 = 7;


for(let i = num3; i < num4; i++) {
    let sum = i * num4;
    document.write(`${i} * ${num4} = ${sum}`);
    document.write('<br>');
}
document.write('<br>');


document.write('<b>Знайти суму всіх цілих чисел від 1 до 15:</b><br><br>');

let num5 = 1;
let num6 = 15;
let sum = 0;

for(let i = num5; i < num6; i++) {
    sum += i;
}
document.write(sum + "<br><br>");


document.write('<b>Знайти добуток усіх цілих чисел від 15 до 35:</b><br>');

num5 = 15;
num6 = 35;
sum = 1;

for(let i = num5; i < num6; i++) {
    sum *= i;
}
document.write(`<p> ${sum} </p>`);


document.write('<b>Знайти середнє арифметичне всіх цілих чисел від 1 до 500:</b><br>');

num5 = 1;
num6 = 500;
sum = 0;

for(let i = num5; i <= num6; i++) {
    sum += i;
}
document.write(`<p> ${sum/num6} </p>`);


document.write('<b>Вивести суму лише парних чисел в діапазоні від 30 до 80:</b><br>');

num5 = 30;
num6 = 80;
sum = 0;

for(let i = num5; i <= num6; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}    
document.write(`<p> ${sum} </p>`);


document.write('<b>Вивести всі числа в діапазоні від 100 до 200 кратні 3:</b><br><br>');

num5 = 100;
num6 = 200;

for(let i = num5; i <= num6; i++) {
    if (i % 3 == 0) {
        document.write(i + "&nbsp;&nbsp;")
    }
}    
document.write("<br><br>");


document.write('<b>Дано натуральне число 8. Знайти та вивести на сторінку всі його дільники:</b><br><br>');

num5 = 1;
num6 = 8;

for(let i = num5; i <= num6; i++) {
    if (num6 % i == 0) {
        document.write(i + "&nbsp;&nbsp;")
    }
}    
document.write("<br><br>");


document.write('<b>Визначити кількість його парних дільників:</b><br><br>');

num5 = 1;
num6 = 8;
let num7 = 1;
sum = 0;

for(let i = num5; i <= num6; i++) {
    if (num6 % i == 0) {
        sum += num7;
    }
}    
document.write(sum + "&nbsp;&nbsp;")

document.write("<br><br>");


document.write('<b>Знайти суму його парних дільників:</b><br><br>');

num5 = 1;
num6 = 8;
sum = 0;

for(let i = num5; i <= num6; i++) {
    if (num6 % i == 0) {
        sum += i;
    }
}    
document.write(sum + "&nbsp;&nbsp;")

document.write("<br><br>");


document.write('<b>Надрукувати повну таблицю множення від 1 до 10:</b><br><br>');



let arr = [];
num4 = 1;
num5 = 10;
sum = 0;

document.write("<b>Вариант 1:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;  1 &nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp; 7 &nbsp;&nbsp;&nbsp; 8 &nbsp;&nbsp;&nbsp; 9 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp; </b>");

for(let i = 1; i <= num5; i++) {
    document.write(`<br><b>${i}</b>`);
    for(let x = 1; x <= num5; x++) {
        sum = x * i;
        document.write("&nbsp;&nbsp;&nbsp;" + sum + "&nbsp;&nbsp;");
    }
}


document.write("<br><br>");


for (let i = 1; i <= num5; i++) {
    arr[i] = [];
    for (let j = 1; j <= num5; j++) {
        arr[i][j] = j * i;
        document.write(arr[i][j] + "&nbsp;&nbsp;&nbsp;");
    }
    document.write("<br>");
}
document.write("<br>");


document.write('<b>Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….):</b><br><br>');

num5 = 19.5;
num6 = 29.5;
sum = 0.5;
let result = 0;

for(let i = num5; i <= num6; i = i+0.5) {
    if (num6 == num5) {
        result = i;
    } else {
        result = sum + i;
        }
    document.write(result + " " )
    }

document.write("<br><br>");


document.write('<b>Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів:</b><br><br>');

num5 = 27;
num6 = 10;
let num8 = 100;
sum = 0;

for(let i = num6; i <= num8; i = i+num6) {
        sum = num5 * i;
    document.write(i + " доларів коштує " + (sum) + "&nbsp;гривень<br>")
    }

document.write("<br>");


document.write('<b>Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N:</b><br><br>');

num1 = 1;
num2 = 100;

for (i = num1; i < num2; i++) {
    if (i ** 2 == num2) {
        document.write(i);
    } else if (i ** 2 <= num2 ) {
        document.write(`${i} ,  `);
    }
}
    document.write('<br><br>');


document.write('<b>Дане ціле число. З"ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе):</b>'+ '<br><br>');   

num1 = 113;
num2 = 2;
num3 = 1000;

if (num1 == 2 || num1 == 3 || num1 == 5 || num1 == 7) {
    document.write(`"${num1}" "- просте число"`);
} else if ( num1 % 3 == 0 || num1 % 2 == 0 ) {
    document.write(`"${num1}" - не просте число`);
} else 
    document.write((num1) + " - просте число <br><br>");

for (let i = num2; i < num3; i++) {
    if ( i == 2 ) {
        document.write("<b>Прості числа від 1 до 1000: </b> " + (i) + ", "); 
    } else if (i == 3) {
        document.write(i + ", ");
    } else if (i == 5) {
        document.write(i + ", ");
    } else if (i == 7) {
        document.write(i + ", ");
    } else if (i % 2 == 0 || i % 3 == 0 ||  i % 5 == 0 || i % 7 == 0) {
    } else  {
        document.write(i + ", ");
    }
}

document.write("<br><br>");


document.write('<b>Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна):</b>'+ '<br><br>');   

num1 = 3;
num2 = 10;


let result2 = num1 ** 2;
let result3 = num1 ** 3;
let result4 = num1 ** 4;
let result5 = num1 ** 5;
let result6 = num1 ** 6;
let result7 = num1 ** 7;

// document.write((num1) + " в 2 ступені" + " = " + (result2) + "<br>" +
// (num1) + " в 3 ступені" + " = " + (result3) + "<br> " +
// (num1) + " в 4 ступені" + " = " + (result4) + "<br>" +
// (num1) + " в 5 ступені" + " = " + (result5) + "<br>" +
// (num1) + " в 6 ступені" + " = " + (result6) + "<br>" +
// (num1) + " в 7 ступені" + " = " + (result7) + "<br>");


num2 = +prompt("введите любое число чтобы узнать является ли оно 3-ке в какой-то степени");


if (num2 == result2 || num2 == result3 || num2 == result4 || num2 == result5 || num2 == result6 || num2 == result7) {
    document.write(`число ${num2} равняется ${num1}-ке в степени` )
    }
    else {
    document.write(`число ${num2} не равняется ${num1}-ке в какой-то степени`)
}














