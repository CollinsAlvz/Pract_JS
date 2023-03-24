let array = ["A", "B", "C", "D", "E", "F"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == "C") {
        document.write(element + "<br>");
    }
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == "C") {
        continue //recorre todo pero se salta el dato de la condicion
    }

    document.write(element + "<br>");
}


for (element in array) {
    document.write(element);
}
document.write("<br>");
for (element of array) {
    document.write(element);
}


let num = 0;
while (num < 100) {
    num++
    document.write(num);
    if (num == 10) {
        break;
    }
}


while (num >= 1) {
    document.write(num + "<br>");
    num--;
}

do {
    document.write(num + "<br>");
    num++
} while (num <= 10);
