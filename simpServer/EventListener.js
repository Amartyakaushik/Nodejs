const EventEmitter = require('events');
const myEmitter= new EventEmitter();




myEmitter.on('firstevent',(arg1,arg2)=>{
        // Event handler logic
        console.log('Event occured with arguments:',arg1,arg2);
    });

myEmitter.once('firstevent',(arg1,arg2)=>{
    // Event handler logic
    console.log('This listnere with be executed only Huku:');
});



    
// myEmitter.emit('firstevent','Hello','Hii');
// myEmitter.emit('firstevent','Hello','hii');


// when we want the event to occur a particulat no. of  time
const eventHandler=(arg1,arg2)=>{
        // Event handler logic
        console.log('Event occured with arguments:',arg1,arg2);
    };

    myEmitter.on('firstevent',eventHandler);


    // TO REMOVE PARTICULAR EVENT i.e. "eventHandler"...
    for(var i=0; i<5; i++){
        if(i==2){
            myEmitter.removeListener('firstevent',eventHandler);
        }
        myEmitter.emit('firstevent','Hello','Hii');
    }

    // To remove all event listner at once ...
    for(var i=0; i<5; i++){
        myEmitter.emit('firstevent','Hello','Hii');
        if(i==2){
            myEmitter.removeAllListeners('firstevent');
        }
    }