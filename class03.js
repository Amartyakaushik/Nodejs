// Function
// Anonymous function
// Arrow function

// // setTimeout Function
// const dealayedFunction = () => {
//     console.log('Delayed function executed!');
// };

// setTimeout(dealayedFunction,5000);
// console.log("hello");

// // setInterval Function
// const repeatedFunction = () => {
//     console.log("Repeated function executed");
// };

// const intervalID = setInterval(repeatedFunction,2000);

// // clearInterval Function
// setTimeout( () => {
//     clearInterval(intervalID);
//     console.log('Interval stopped.');
// },5000);


// Synchronous callback function
// function parentFunction(name, callback){
//     callback();
//     console.log("Hey "+name);
// }
// function random(){
//     console.log("This is the random callback funciton");
// }
// parentFunction("Random String",random);


function parentFunction02(name, AsynCallBack){
    setTimeout(AsynCallBack,2000);
    console.log("Hey "+name);
}

parentFunction02("Random String2",() => {
    console.log("This is the Asyn callback function");
});
