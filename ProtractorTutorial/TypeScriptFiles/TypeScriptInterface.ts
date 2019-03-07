// create an object 

let obj = 
{
    color : "red",
    engine : 100,    
}
console.log("Plain OBJECT creation . Printing the property engine as --> "+obj.engine);


// define an INTERFACE
export interface Vehicle
{
    make:string,
    color:string;
    engine:number;
    camera?:boolean; // with '?' it becomes optional
}

let maruti =
{
    make : "maruti",
    color : "brown",
    engine : 100,
    camera : true
}

let kia =
{
    make : "kia",
    color : "red",
    engine : 500,
}

validateInterfaceVehicle(maruti);
validateInterfaceVehicle(kia);

function validateInterfaceVehicle(carModel:Vehicle){
    console.log("validateInterfaceVehicle() is called for "+carModel.make);
    console.log("Color of Car is --> "+carModel.color);
    console.log("Engine of Car is --> "+carModel.engine);    
}