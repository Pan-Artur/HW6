let number;

console.log("task-1");

number = 1;

while (number <= 10) {
    console.log(number);
    number += 1;
}

console.log("task-2");

for (let i = 1; i <= 20; i += 1) {
    if (i % 2 === 0) {
        continue;
    } else {
        i += 1;
    }

    console.log(i);
}

console.log("task-3");

for (let j = 1; j <= 10; j += 1) {
    const multiplication = j * 7;
    console.log(`${j} * ${7} = ${multiplication}`);
}

console.log("task-4");

number = 0;

let array1 = [1, 2, 3, 4, 5];

while (number <= 4) {
    console.log(array1[number]);
    number += 1;
}

console.log("task-5");

number = 0;

for (let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; array2[number] <= 10; array2[number] += 1) {
    if (array2[number] === 7) {
        break;
    } else {
        console.log(array2[number]);
    }
}

console.log("task-6");

for (let n = 1; n <= 45; n += 1) {
    if (n === 45) {
        break;
    } else {
        console.log(n);
    }
}

console.log("task-7");

let m = 0;

while (m <= 19) {
    m += 1;

    if (m % 3 !== 0) {
        console.log(m);
    } else {
        continue;
    }
}