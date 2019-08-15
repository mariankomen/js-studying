let num1 = +prompt("Enter 1 number: ");
let num2 = +prompt("Enter 2 number: ");
let num3 = +prompt("Enter 3 number: ");

if (num1 > num2 && num1 > num3 && num2 > num3) {
    console.log(num1 + " " + num2 + " " + num3);
} else if (num1 > num2 && num1 > num3 && num2 < num3) {
    console.log(num1 + " " + num3 + " " + num2);
} else if (num1 < num2 && num3 < num1 && num3 < num2) {
    console.log(num2 + " " + num1 + " " + num3);
} else if (num1 < num2 && num3 > num1 && num3 < num2) {
    console.log(num2 + " " + num3 + " " + num1);
} else if (num3 < num2 && num2 > num1 && num3 > num2) {
    console.log(num3 + " " + num2 + " " + num1);
} else if (num3 < num2 && num2 < num1 && num3 > num2) {
    console.log(num3 + " " + num1 + " " + num2);
}

123 --
132 --
2 1 3 --
2 3 1 --
3 2 1 --
3 1 2 --

let x = prompt("Який колір світлофора: ");

switch (x) {
    case "Green":
        console.log("Go!")
        break;

    case "Yellow":
        console.log("Wait!")
        break;
    case "Red":
        console.log("Stop!")
        break;
    default:
        console.log("Do everything!");
        break;
}

let color = prompt("Який колір? (Green/Yellow/Red)");

if (color === "Green" || color === "Yellow" || color === "Red") {
    let isRoadClear = prompt("Дорога чиста? (yes/no)");
    if (color === "Green" && isRoadClear === "yes") {
        alert("Иди.");
    } else if (color === "Green" && isRoadClear === "no") {
        alert("Подожди пока нарушители проедут.");
    } else if (color === "Yellow" && isRoadClear === "no") {
        alert("жди");
    } else if (color === "Yellow" && isRoadClear === "yes") {
        alert("все рано жди");
    } else if (color === "Red" && isRoadClear === "yes") {
        alert("стой все рано");
    } else if (color === "Red" && isRoadClear === "no") {
        alert("стой и жди");
    } else {
        alert("делай что хочешь!");
    }
} else {
    alert("Uncorrect color.");
}










