// class key word introduce in 2015
// class based inheritance
// class syntax dose not introduce a new object oriented inheritance model in javascript
//classes are primarily  syntatical sugar over the existing prototypal inheritance
//let us write prototype inheritance code with classes

class person {//how to create class
    constructor(fname, lname){//how to initialize properties
        this.firstname = fname
        this.lastname = lname 
    }
    saymyname(){//how to add methods
        return this.firstname + '' + this.lastname
    }
}
const classp1 = new person('bay', 'fon')//how to create an instance of the class
console.log(classp1.saymyname())

//so we can create an instance and access the properties
//and method like  before nothing changes the class


//lets now superhero which inherite from person two keyword take care
//of the entire inheritance these two two keywords are `extends` and `super`
//we specify that class superhero extendes class persons
//and in constructor we accept first name and last name
//we invoke super

class superhero extends person{//how to inherit using extends and superkeyword
    constructor(fname, lname){
        super(fname, lname)
        this.issuperhero = true
    }
    fightcrime(){
        console.log("fightcrime")
    }
}
const batman = new superhero ('bruce', 'wayne')
console.log(batman.saymyname())