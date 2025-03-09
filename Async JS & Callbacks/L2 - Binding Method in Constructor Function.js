function person(name,age){
    this.name=name 
    this.age=age 
    this.displayInfo =function (){
      // console.log(this.name,this.age)
       console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
  }
let ans = new person("sumanth",19)
let a=ans.displayInfo.bind(ans)
a()
