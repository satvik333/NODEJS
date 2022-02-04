function myFunc(smntng) {
  console.log(`MSG => ${smntng}`);
}
setTimeout(myFunc, 1000, 'Hello');

setImmediate(myFunc,1500,"Immediate")
setInterval(myFunc,2000,"Interval")

