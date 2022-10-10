class Person {
    constructor(firstName, lastName){
     this.firstName = firstName
     this.lastName = lastName
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

const nzai = new Person('nzai', 'kilonzo')
console.log(nzai.greeting())

class Customer extends Person {
    constructor(firstName, lastName,phone, membership ) {
        super(firstName, lastName)
        this.phone = phone
        this.membership = membership
        
    }
    static fun (){
        return `loves to party`
    }
}

const flinch = new Customer('flinch','safari', 678, 'basic')
console.log(Customer.fun())
