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
// let roundedNumber = 3.6

// if(roundedNumber < (Math.floor(roundedNumber) + 0.6) && roundedNumber > Math.floor(roundedNumber)) {
//     console.log(Math.floor(roundedNumber))
// }else if(roundedNumber > (Math.floor(roundedNumber) + 0.5) && roundedNumber < Math.ceil(roundedNumber)) {
//     console.log(Math.ceil(roundedNumber))
// }

// let roundedNumber = 3.5
// let nb1 = Math.floor(roundedNumber)
// let nb2 = Math.ceil(roundedNumber)

// if(roundedNumber < (nb1 + 0.6) && roundedNumber > nb1) {
//     console.log(nb1)
// }else if(roundedNumber > (nb1 + 0.5) && roundedNumber < nb2) {
//     console.log(nb2)
// }

// 08 - Rounded but better, Méthode 2
// const roundedNumber = 3.3
// Isoler le chiffre après le .
// const roundedNumberString = roundedNumber.toString()
// const index = roundedNumberString.indexOf(".")+1+

// let decimal = roundedNumberString.substring(index, index+1)
// decimal = Number(decimal)
// Comparer le chiffre après le . à 5 et arrondir
// if(decimal >= 5){
//     console.log(Math.ceil(roundedNumber))
// }else{
//     console.log(Math.floor(roundedNumber))
// }

// 09 - Rounded but better, Méthode 3
const roundedNumber = 3.3
// Isoler le chiffre après le .
const stringifiedNumber = roundedNumber.toString()
const array = stringifiedNumber.split(".")
// const stringifiedDecimal
// Comparer et arrondir