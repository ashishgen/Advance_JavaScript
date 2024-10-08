// Genrators are special class of functions that simplify 
//the task of writing iterators

const obj = {
    [Symbol.iterator]: function() {//we dont have wory about this symbol .iterator
        let step = 0
        const iterator = {
            next: function(){//implementing next method
                step++
            if(step === 1){
               return {value: "hello", done: false}//creating object and return from the next method
            } else if (step ===2){
                return{
                    value: 'world', done: false
                }
            }
            return {value: undefined, done: true}
            }
            
        }
        return iterator
    },
}
// for (const word of obj){
//     console.log(word)
// }

function normalfunction(){
    console.log("hello")
    console.log("world")
}
// normalfunction()
// normalfunction()

function Genratorsfunction(){
 yield 'hello'
 yield 'world'
}
const generatorobject = Genratorsfunction()
for (const word of generatorobject){
    console.log(word)
}