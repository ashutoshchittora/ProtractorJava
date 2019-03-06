// 'import' in TS = 'require' in JS
import {TypeScriptClassDemo} from './TypeScriptClassDemo' ;
let typeClassAccess = new TypeScriptClassDemo(454545);
typeClassAccess.setUserName("hello i am coming  from TypeScriptAccess class");
console.log(typeClassAccess.getUserName());
console.log(typeClassAccess.getSsn());

// no return function
function validateNoReturnFunction(valueTest:string):void {
    console.log("validateNoReturnFunction() --> "+valueTest);    
}

validateNoReturnFunction("hello Automator");

// return function
function validateReturnFunction(valueTestReturn:number):number {
    return valueTestReturn+7;
}

console.log("validateReturnFunction() --> "+validateReturnFunction(12));    