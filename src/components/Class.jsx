import React from 'react'

export default function Class() {
    class Car{
        constructor(name,age){
            this.brand=name
            this.age=age
        }
    }
    const mycar= new Car('Ford',21)   
    
    class College{
        constructor(name1){
            this.clg=name1
        }
        present(){
            return (`I am a ${this.clg} student`)
        }
    }
    class Model extends College{
        constructor(name,mod){
            super (name);
            this.model=mod;
        }
        show(){
            return `${this.present()}, it is in ${this.model}`
        }
    }

    const mycollege=new Model('St.Aloysius','Light house')

    //homework

    class Intern{
        constructor(x){
            this.course=x;
        }
        present(){
            return `i am doing internship on ${this.course}`
        }
    }
    class Office extends Intern{
        constructor(x,y){
            super(x)
            this.place=y;

        }
        show(){
            return `${this.present()}, at ${this.place}`
        }
    }
    
    const mywork=new Office('MERN','Cognitive Solutions')
  
    return (
    <div>
        <h2>{mycar.brand}</h2>
        <h2>{mycar.age}</h2>
        <h2>{mycollege.present()}</h2>
        <h2>{mycollege.show()}</h2>
        <hr />

        <h2>{mywork.show()}</h2>

    </div>
  )
}
//am doing internship on MERN at Cognitive solutions