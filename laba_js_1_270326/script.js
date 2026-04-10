const task_1 = function () {
    const name = "Джон";
    const admin = name;
    alert(admin);
}

const task_2 = function () {
    let a = Number(prompt("Первое число?", 1));
    let b = Number(prompt("Второе число?", 2));

    alert(a + b);
}

const task_3 = function () {
    for (let i = 2; i < 11; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}

const task_4 = function () {
    let i = 0;
    while (i < 3) {
        alert( `number ${i}!` );
        i++;
    }
}

const task_5 = function () {
    while (true) {
        let a = prompt("Введите число больше 100: ");
        if (a === null || Number(a) > 100) {
            alert("Спасибо, до свидания!");
            break;
        }
        alert("Повторите операцию");
    }
}

const task_6 = function () {
    let n = Number(prompt("Введите n: "));

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            alert(i);
        }
    }
}

let exit = true;

while(exit == true)
{
    let a = Number(prompt("Введите номер задания: (7 - выход)"));
    switch (a) {
        case 1:
            task_1();
            break;
        case 2:
            task_2();
            break;
        case 3:
            task_3();
            break;
        case 4:
            task_4();
            break;
        case 5:
            task_5();
            break;
        case 6:
            task_6();
            break;
        case 7:
            exit = false;
            break;
        default:
            alert("Повторите операцию");
    }
}