let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Resolve'
    resolve(workDone)
  } else {
    const why = 'Reject'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(() => {
      console.log("Done")
    })
    .catch(err => {
      console.error(err)
    })
}
checkIfItsDone()


let done1 = false

const isItDoneYet1 = new Promise((resolve, reject) => {
  if (done1) {
    const workDone = 'Done'
    resolve(workDone)
  } else {
    const why = 'Not Done'
    reject(why)
  }
})
const checkIfItsDone1 = () => {
    isItDoneYet1
      .then(() => {
        console.log("Done")
      })
      .catch(err => {
        console.error(err)
      })
  }
  checkIfItsDone1()


  const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  
      }
      resolve(data)
    })
  })
}

getFile('C:/Users/satvik.ms/Desktop/NODEJS/promise.js')
.then(data => console.log(data))
.catch(err => console.error(err))