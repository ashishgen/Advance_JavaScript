//iteration in javascript we have before 2015 we had three looping constructs
//for loop, while loop and do while loop
// let show example how to iterate and access data with a string and array type ussing the for loop


//string
const str = "Ashish"
//for loop
for (let i=0; i<str.length; i++){
    console.log(str.charAt(i))
}

//output
// A
// s
// h
// i
// s
// h

//Array is the collection of items which is nothing but the characters of the string 
//Array
const arr = ["A","s","h","i","s","h"]
//for loop
for (let i=0; i < arr.length; i++){
    console.log(arr[i])
}

//maps and sets built in iterable later
//see explaination with code iteration
 
const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function(){
                step++
            if(step === 1){
               return {value: "hello", done: false}
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
for (const word of obj){
    console.log(word)
}