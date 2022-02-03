function myCallback(data) {
	console.log('My callback data: ' + data);
}

function printData(callback) {
	callback('a,b');
}

printData(myCallback); 


setTimeout(() =>{
	console.log("After 3 sec")
},3000)