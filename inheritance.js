// function person(fname, lname){
//         this.firstname = fname
//         this.lastname = lname
//     }
//     const person1 = new person("priya", "payal")   //new keyword used for constructor
//     const person2 = new person("sony", "tina")
    
//     person.prototype.getFullName = function () {
//         return this.firstname + ' ' + this.lastname
//     }

//     function superhero(fname, lname){
//         //this = []
//         person.call(this, fname, lname)
//         this.issuperhero = true
//     }
//     superhero.prototype.fightcrime = function () {
//         console.log('fight crime')
//     }
//     superhero.prototype = Object.create(person.prototype)
//     const batman = new superhero('priya', "payal")
//     console.log(batman.getFullName())

    // output 
    // priya payal


    //prototype inheritance


    function person(fname, lname){
                this.firstname = fname
                this.lastname = lname
            }
            const person1 = new person("priya", "payal")   //new keyword used for constructor
            const person2 = new person("sony", "tina")
            
            person.prototype.getFullName = function () {
                return this.firstname + ' ' + this.lastname
            }
        
            function superhero(fname, lname){
                //this = []
                person.call(this, fname, lname)
                this.issuperhero = true
            }
            superhero.prototype.fightcrime = function () {
                console.log('fight crime')
            }
            superhero.prototype = Object.create(person.prototype)
            const batman = new superhero('priya', "payal")
            superhero.prototype.constructor = superhero
            console.log(batman.getFullName())    