// create a function called as findLength which takes string as an argument and returns a prmoise
// if the length of the string is more than 5 then resolve the promise with 'is valid'
// else reject the promise  with 'is invalid'

function findLength(str){
    return new Promise(function(resolve, reject){
        if(str.length > 5) {
            resolve('is valid')
        } else {
            reject('is invalid')
        }
    })
}

findLength('secret123').then(function(msg){
    console.log(msg)
}).catch(function(err){
    console.log(err)
})


// create a function called as determine, which returns a promise, resovle after 2 seconds with 'promise resolved'


// create a function willReject which returns a promise, reject it after 1 second with msg 'promise rejected'