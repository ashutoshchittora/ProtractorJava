const a=4; // this can only be created once.
let b:string="Hello";
let c:number=3;
let lst:Array<number>=[1,2.3];
let dynamicVariableUse:any;
dynamicVariableUse=5;
dynamicVariableUse="NewValue";
let flagCreate:boolean=false;

// javascript mainly uses ES5 engine . Typescript uses ES6 engine and converts the .ts file back to javascript .js ES5 so that js can understand it.
// Typescript = addtionalFeafture ( OOPs) + JavaScript
// ES6 has added keywords -- 'let' and 'const' which is not present in ES5.
// 'let' is a replacement of 'var' and helps to remove asynchronous behavior of 'var'

// this method to show that 'var' is asynchronous. Comment one block and run to see results -- ">> tsc TypeScriptBasics.ts" and then ">> node TypeScriptBasics.ts"
for(var i=0;i<5;i++){
    setTimeout(function(){console.log(i);}, 100*i); // this block waits for 100*i ms and print i after 100*i values
}

// this method to show that 'let' is synchronous.tsc
for(let i=0;i<5;i++){
    setTimeout(function(){console.log(i);}, 100*i); // this block waits for 100*i ms and print i after 100*i values
}

/** Fat pipes or Anonymous function example as below :
 * 
        describe('angularjs homepage todo list', ()=> {
        it('should add a todo', ()=> {
    });
  });
 
 */

/** ">>> tsc TypeScriptInterface.ts" and then ">>> node TypeScriptInterface.js"
*/