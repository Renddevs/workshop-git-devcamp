let city = "Bandung";
let provinsi = "Jawa Barat";

let no = 131;
let status = "friendzone"; // or false

let address = city + "," + provinsi;

let age = 25;

let birthDay = age + 1;

let comparisson = 3 === 3;

// if(status === "jomblo"){
//    console.log('banyak duit');
// }else if(status === "friendzone"){
//     console.log('bahagia :(');
// }else{
//     console.log('kantong kosong');
// }

let result = 80;

// if (result >= 50 && result <= 70) {
//     console.log('out');
// }else{
//     console.log('selamat anda lulus');
// }
let isMale = true;
let isFemale = true;

let message
if (isMale && isFemale) {
    message = "Love";
}else if(isMale || isFemale){
    message = "Realy???";
    console.log('Realy???');
}else{
    message = "Single";
    console.log('single');
}

document.getElementById('head').innerHTML = message;

//global scoper and local scope
let name = 'Jhon';
name = 'doe';
console.log(name);

let myName = 'Rendy';
myName = 'Praseptya';
console.log(myName);

let names = "jhon";

let getName = function(){
    console.log(names);
    let umur = 20;
    console.log(umur);
}
let add = function(x,y,z){
    return x + z +y
}

let umurs = function(){
    return 25;
}
let getScore = function ( nama = 'jhon',scores = 80){
    return nama + " " + "Umur : " + umurs();
}

let myBook = {
    title : "How I Meet your Mother",
    author : "Jhon F. Doe",
    pageCount : 326
}

let getBook  = function(book){
    console.log(book.title)
}

let myAccount = {
    name: 'jhon Doe',
    expense: 0,
    income: 0
}

let addExpense = function(account,expense){
    console.log();
}

//string methods

let text = "Jhon"
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());

let password = "random123"
console.log(password.includes('random123'));

// number method

let num = 514.123;

console.log(num.toFixed(2));
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

//array

let emptyArray = [];
let array = [1,2,3,5,6,7];
console.log(array[1]);

let nameList = [
    'Rendy',
    'Praseptya',
    'Nugraha'
];

nameList.push('Dani');
nameList.unshift('Pedrosa');
// nameList.pop();
// nameList.shift();
nameList[0] = "Rossi";

let activities = ['Tidur','Ngoding','PUBG'];
activities.forEach(function(value,index){
    console.log(index);
    console.log(value);
});
console.log(activities.indexOf('Tidur'));

