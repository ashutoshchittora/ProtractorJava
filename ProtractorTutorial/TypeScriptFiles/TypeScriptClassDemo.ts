export class TypeScriptClassDemo
{
  // class constitutes of -- properties , methods and constructors
  // properties -- variables declared inside a class is treated as properties. It should be accesible to any object outside this class
  // let vs property : both are same except that property dont use a let keyword and is declared inside a class
  // 'export' -- use this if you want the memebers of this class to be available to all other objects outside this class.
  // 'property' in TS = 'prototype' in JS

  username:string;
  password:string;
  Ssn:number;
    
  /*constructor(){
    console.log("i am the constructor , i am called at class load and take the first preference ...");
  }*/

    constructor(ssnReceived:number){
        this.Ssn = ssnReceived;
        }
        
  getUserName(){
        return this.username;
    }

  setUserName(userNameReceived:string){
        this.username = userNameReceived;
    }

    getSsn(){
        return this.Ssn;
    }
}

//let typeClass = new TypeScriptClassDemo();
let typeClass = new TypeScriptClassDemo(123123);
typeClass.setUserName("hello i am coming  from TypeScriptClassDemo class");
console.log(typeClass.getUserName());
console.log(typeClass.getSsn());

/*
This below block demonstratees the use of 'export' for an Interface
*/
import {Vehicle} from './TypeScriptInterface'
function validateInterfaceVehicle(carModel:Vehicle){
    console.log("validateInterfaceVehicle() is called for "+carModel.make);
    console.log("Color of Car is --> "+carModel.color);
    console.log("Engine of Car is --> "+carModel.engine);    
}

let skoda =
{
    make : "skoda",
    color : "blue",
    engine : 300,
}
// call below method outside of TypeScriptClassDemo
validateInterfaceVehicle(skoda);
