/*-------------------------------------1------------ */
let city;
city = 'Київ';
city = 'Львів';
let address = city;
console.log(address);
/*-------------------------------------2------------ */
let a;
a = prompt('Введіть число для визначення парності:');
console.log(a == 0 ? 'Число 0' : a % 2 === 0 ? 'Число парне' : 'Число не парне');
/*-------------------------------------3----------- */
function max(...arg) {
    let bigger = arg[0];
    for (let i = 1; i < arg.length; i++)
        if (arg[i] > bigger)
            bigger = arg[i];
    return bigger;
}
console.log('[5,-2] max=', max(5, -2));
console.log('[5,-2,30,6] max=', max(5, -2, 30, 6));
/*-------------------------------------4----------- */
function getSqrt(number) {
    if (isNaN(number))
        return "Повинно бути числове значення.";
    else if (number == "" || number == " ")
        return "Будь ласка, введіть число!";
    else if (number < 0)
        return "Введіть додатнє число.";
    else
        return "Квадратний корінь з " + number + " дорівнює " + Math.sqrt(number);
}
console.log(getSqrt(''));
console.log(getSqrt('qw'));
console.log(getSqrt(-7));
console.log(getSqrt(9));
/*-------------------------------------5----------- */
let words = [];
let sel = (selector) => document.querySelector(selector);
let word = sel('#word');
let text = sel('#text');
let some = sel('.somewords');
sel('#add').addEventListener('click', () => {
    if (word.value == '') {
        word.placeholder = 'Please write a word!';
    }
    else {
        some.innerHTML = '';
        if (words.indexOf(word.value) == -1)
            words.push(word.value);
        words.forEach((value, ind) => {
            ind > 0 ? some.innerHTML += ',' + value : some.innerHTML = value;
        });
        word.placeholder = 'word here...';
        word.value = '';
    }
});
sel('#reset').addEventListener('click', () => {
    words.length = 0;
    some.innerHTML = '';
});
sel('#censor').addEventListener('click', () => {
    let val;
    let val1;
    if (text.value == '') {
        text.placeholder = 'Please write a text!';
    }
    else {
        val = text.value;
        words.forEach((value, ind) => {
            if (val.indexOf(value) >= 0) {
                val1 = val.slice(0, val.indexOf(value));
                val = val1.padEnd(value.length + val1.length, "*") + val.substring(val.indexOf(value) + value.length);
            }
        });
        text.value = val;
        text.placeholder = 'text here...';
    }
});
