let numChildren = 0
let isCarful = false

if (!isCarful) {
    numChildren++
}
console.log(numChildren)

let silverwareCount = 5
if (silverwareCount % 2 != 0) {
    console.log("there is something missing")
}
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if(performance == "stellar"){
    salary += stellarBonus
}
else {
    salary += goodBonus
}
console.log(salary)


const isVIP = false
let cash = 200
if(isVIP || cash > 300){
    console.log("welcome to the club Mate")
}
else {
    console.log("get out of here Kidoo")
}

const a = 3
let b = 2
let c = 0 || 12
let d
console.log(c)
b = c
b++
if(d){
  b = a
  console.log("true")
}

d = a + (b * c)
d++
b += 2
console.log(b +" "+d +" "+ c)

const gender = 'null'
let profession = "business"
if(gender == 'null'){
    profession = "businessperson"
    console.log(profession)
}
else {
if(gender== 'male'){
    profession = 'businessman'
    console.log(profession)
}
}
    if(gender == 'female'){
         profession = 'businesswoman'
         console.log(profession)

   }
   let boughtTesla = true
const yearOfTeslaPurchase = 2015
let isUSCitizen = false
let currentYear = 2018
let sum = currentYear - yearOfTeslaPurchase
if(boughtTesla && isUSCitizen){
    if(sum < 4){
    console.log("would you like to upgrade?")
    }
    else{
    console.log("are you satisfied?")
    }
}
else if(!isUSCitizen && boughtTesla){
    console.log("would youlike to move to the US?")
}
    
else{
    console.log("are you intrested in buying one?")
    }

