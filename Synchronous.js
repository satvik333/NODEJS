//synchronous call back
function greetings(callback) {
  callback();
}
greetings(() => { console.log('Hi'); });




function parent(call){
    console.log("parent")
    call()
}

function child(){
    console.log("child")
}

parent(child);


try{
    console.log("TRY")
}
catch(e){
    console.log(e,"err")
}
finally{
    console.log("Finally")
}