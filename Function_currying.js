//function Currying- Currying is a processes in functional programming in which we transform a function with multiple 
//arguments into a sequence of nesting functions that take one argument at a time.

//we transform
//function f(a,b,c) is transformed to f(a)(b)(c)
//currying dose not call a function

function sum(a, b, c){
    return a+b+c
}
console.log(2,3,5)
// sum (2,3,5) sum(2)(3)(5)

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
            }
        }
    }
}
const curriedsum = curry(sum)
console.log(curriedsum(2)(3)(5))

const add2 = curriedsum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)
