// const p1 = new Promise(function(resolve, reject){
//     let randomNumber = Math.round(Math.random() * 100) 
//     if(randomNumber % 2 == 0){
//         resolve('even')
//     } else {
//         reject('odd')
//     }
// })

// p1.then(function(evenMsg){
//     console.log(evenMsg)
// }).catch(function(oddMsg){
//     console.log(oddMsg)
// })


// function determine(n) {
//     let result; 
//     setInterval(() => {
//         if(n % 2 == 0) {
//             result = 'even'
//         } else {
//             result = 'odd'
//         }
//     }, 1000);
//     return result
// }

// console.log(determine(10))


function determine(n) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (n % 2 == 0) {
                resolve('even')
            } else {
                reject('odd')
            }
        }, 2000)
        console.log('inside the promise function')
    })
}

determine(10)
 .then(function(msg){
    console.log(msg)
 })
 .catch(function(err){
    console.log(err)
 })
