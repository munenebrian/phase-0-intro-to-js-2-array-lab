// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Garfield) {
    return [...cats, Garfield];
}

function prependCat(Milo) {
    return [Milo, ...cats];
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}