// Closure -A closure is  the combination ofa function bundled together with reference to its surrounding state. Closure
//are created every time a function is created , at function creation time.

// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     inner()
// }
// outer()
// outer()

// output 
// 1
// 1

function outer(){
    let counter = 0
    function inner(){
        counter++
        console.log(counter)
    }
    return inner
}

const fn = outer()
fn()
fn()

// output 
// 1
// 2

//Key point into mind is that closures an inner function has 
// has access to variable in the outer function scope even after 
// the outer function has finished execution
