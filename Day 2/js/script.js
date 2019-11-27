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

let getScore = function ( nama = 'jhon',scores = 80){
    return `${nama} Score: ${scores}`
}
console.log(getScore('Rendy',100));

