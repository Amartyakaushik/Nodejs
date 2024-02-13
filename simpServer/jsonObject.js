// HERE WE  CONVERTED THE OBJECT INTO JSON FORMAT

const dataObject={
    name:"John",
    age:30,
    city:"New York"
};

const jsonString=JSON.stringify(dataObject);
console.log(jsonString);
console.log(typeof(jsonString));           //String


// // CONVERSION OF JSON FORMAT TO OBJECT DATA TYPE
const jsonString='{"name":"John", "age" : 30, "city" : "New York"}';
const dataObject=JSON.parse(jsonString);
console.log(dataObject);
console.log(typeof(dataObject));     // object