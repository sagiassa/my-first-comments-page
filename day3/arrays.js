const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
let x = genes[2]
let y = genes[4]
genes[2] = y
genes[4] = x
console.log(genes)
genes.splice(3, 1)
genes.push('AZIN2', 'AZIN2')
console.log(genes)
genes.unshift('FXT')
console.log(genes)

//objects ex

const car = {
    color: "red",
    numWheel: 3,
    isFancy: false
}

if (car.isFancy) {
    console.log('the car color is ' + car.color + ' with ' + car.numWheel + ' wheels. It is fancy')
} else {
    console.log('the car color is ' + car.color + ' with ' + car.numWheel + ' wheels. It is not fancy')
}

const table = {
    item: "blue",
    toBeginning: false,
    items: ["red", "green", "black"]
}
if (table.toBeginning) {
    table.items.unshift(table.item)
} else {
    table.items.push(table.item)
}
console.log(table.items)

//part 8 exs

const p1 = {
    name: "jill",
    age: 23,
    city: "Aco"
}
const p2 = {
    name: "robert",
    age: 23,
    city: "tlv"
}
if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("jill wanted to date robert")
    } else {
        console.log("jill wanted to date robert but couldn't")
    }
}

const myList = [
    { name: "s", age: "23" },
    { name: "u", age: "16" }
]
myList[0].name = myList[1].name
console.log(myList)
myList.splice(1, 1)
console.log(myList)

const Slist = [
    { name: "r", age: "24" },
    { name: "b", age: "13" }
]

myList.push(...Slist)
console.log(myList)

const libery = {
    books: [ 
        {title: "TRNT" , author: "Robert Frost"}
    ]
}
console.log( libery)

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true },
    
  }
  
  let name = (prompt('Please enter the name for your reservation')).toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1)
  
  if(reservations[name] && reservations[name].claimed){
      alert( "Hmm. someone already claimed this reservation")
  }  else {
      if(reservations[name] && !reservations[name].claimed){
      alert("Welcome " +name)
      }
      else
      alert("You have no reservation")
      reservations[name] = {claimed : true}
    }
  console.log(Object.keys(reservations))

  const date = 3

  const kitchen = {
      owner: "Geraldine",
      hasOven: true/false, // choose one
      fridge: {
          price: 500,
          works: true/false, // choose one
          items: [
              { name: "cheese", expiryDate: 7 },
              { name: "raddish", expiryDate: 2 },
              { name: "bread", expiryDate: 1 }
          ]
      }
  }
if(kitchen.hasOven && kitchen.fridge.work)  {
    console.log("raddish expierd 1 day ago")
}else if(!kitchen.hasOven && kitchen.fridge.work){
    console.log("jhgdsds")
}else if(kitchen.hasOven && !kitchen.fridge.work){
    console.log("jsgd")
}else{
    console.log("ksdjyhlkdv")
}
  

    
  