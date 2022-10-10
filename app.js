// class Person {
//     constructor(name, location, dob){
//      this.firstname = name
//      this.location = location
//      this.birthday = new Date(dob)
//     }
//     greeting(){
//       return `Hello ${this.firstname}`
//     }
//     getAge (){
//       const diff = Date.now() - this.birthday.getTime()
//       const ageDate = new Date(diff)
//       return Math.abs(ageDate.getUTCFullYear()-1970)
//     }
//     isMarried(name){
//      this.firstname = name
//     }
//     static add(x,y){
//       return x+y
//     }
  
//   }
  
//   const nzai = new Person('nZAI', 'mariakani', '07-13-1999')
//   const kilonzo = new Person(22, 23)
//   console.log(kilonzo.greeting())
//   console.log(nzai.getAge())
//   nzai.isMarried('Oriti')
//   console.log(nzai)
//   console.log(Person.add(2,4))