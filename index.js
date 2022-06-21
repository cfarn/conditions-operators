// 01 - Comparaison
const test = 143
const bis = 219

// console.log(test > bis)
// console.log(test < bis)
// console.log(test >= bis)
// console.log(test <= bis)
// console.log(test === bis)
// console.log(test !== bis)

// 02 - Condition
const limit = 50
let score = 64

// if(score>=limit) {
//     console.log("Ok good !")
// }else {
//     console.log("Oh nooo...")
// }

// 03 - Condition II
const password = "azerty"
// if(password.length>5) {
//     console.log("The password is secure")
// }

// 04 - Condition III
// if(score>=limit && password.length>5) {
//     console.log("Everything is good")
// }else if(score>=limit || password.length>5) {
//     console.log("Something is good")
// }else {
//     console.log("Nothing is good")
// }

// 05 - Random
const min = 1
const max = 6
const random = Math.floor(Math.random() * max) + min

// if(random===6) {
//     console.log("Yes i win !")
// }else {
//     console.log("So close...")
// }

// 06 - Month
let month = "mai"
// switch(month){
//     case 'January' : 
//     case 'February' : 
//     case 'March' : 
//     console.log("Winter")
//     break;
//     case 'April' :
//     case 'May' : 
//     case 'June' :
//         console.log("Spring")
//     break;
//     case 'July' :
//     case 'August' :
//     case 'September' :
//         console.log("Summer")
//     break;
//     case 'October' :
//     case 'November' :
//     case 'December' :
//         console.log("Fall")
//     break;
//     default : 
//         console.log("Ce n'est pas un mois");
//     break;
// }

// 07 - Rounded but better
let roundedNumber = 12.4

if(roundedNumber < (Math.floor(roundedNumber) + 0.6) && roundedNumber > Math.floor(roundedNumber)) {
    console.log(Math.floor(roundedNumber))
}else if(roundedNumber > (Math.floor(roundedNumber) + 0.5) && roundedNumber < Math.ceil(roundedNumber)) {
    console.log(Math.ceil(roundedNumber))
}

