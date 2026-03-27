const task_1 = function () {
    const name = "Джон";
    const admin = name;
    alert(admin);
}

let exit = true;

while(exit == true)
{
    let a = prompt("Введите номер задания: ");
    switch (a) {
        case 1:
            task_1;
            break;
        case 2:
            exit = false;
            break;
        default:
            alert("Повторите операцию");
            let a = prompt("Введите номер задания: ");
    }
}