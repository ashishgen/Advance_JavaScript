//this -The javascript this keyword which is used in a function , refers to the object it belongs to.
//it makes functions reusable by letting you decide the object value
//this value is determined entirely by how a function is called

// function sayMyname(name) {
//     console.log(`my name is ${name}`)
// }
// sayMyname("walter White")
// sayMyname("Heisenberg")

//output
// my name is walter White
// my name is Heisenberg

//How to determine `this`?
//implicit binding
//explicit binding
//New binding
//Default binding

//implicit binding
// const person ={
//     name: 'Ashish',
//     sayMyname: function () {
//         console.log(`My name is ${this.name}`)
//     },
// }

// person.sayMyname()
// output
// My name is Ashish

//explicit binding
// const person ={
//     name: 'Ashish',
//     sayMyname: function () {
//         console.log(`My name is ${this.name}`)
//     },
// }

// function sayMyname(){
//     console.log(`my name is ${this.name}`)
// }
// sayMyname.call(person)

//New binding

// function person(name){
//     //this = {}
//     this.name = name
// }
// const p1 = new person("Ashish")
// const p2 = new person("Ashish")

// console.log(p1.name, p2.name)


//Default binding
// const person ={
//     name: 'Ashish',
//     sayMyname: function () {
//         console.log(`My name is ${this.name}`)
//     },
// }
// globalThis.name = 'superman'
// function sayMyname(){
//     console.log(`my name is ${this.name}`)
// }
// sayMyname()

