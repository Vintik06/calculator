
let screen = document.getElementById("screen");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");
let equal = document.getElementById("equal");

let firstAdder = 0;
let secondAdder = 0;

one.addEventListener("click", () => {
    screen.textContent += 1;
});

two.addEventListener("click", () => {
    screen.textContent += 2;
});

three.addEventListener("click", () => {
    screen.textContent += 3;
});

four.addEventListener("click", () => {
    screen.textContent += 4;
});

five.addEventListener("click", () => {
    screen.textContent += 5;
});

six.addEventListener("click", () => {
    screen.textContent += 6;
});

seven.addEventListener("click", () => {
    screen.textContent += 7;
});

eight.addEventListener("click", () => {
    screen.textContent += 8;
});

nine.addEventListener("click", () => {
    screen.textContent += 9;
});

zero.addEventListener("click", () => {
    screen.textContent += 0;
});

let plusAvaible = true;
plus.addEventListener("click", () => {
    if (plusAvaible == true) {
        firstAdder = screen.textContent;
        screen.textContent += "+";
        plusAvaible = false;
    }
});

equal.addEventListener("click", () => {
    secondAdder = screen.textContent.replace("+", "").replace(firstAdder, "");
    screen.textContent = Number(firstAdder) + Number(secondAdder);
});
