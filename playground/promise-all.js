function apiCall1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(['ramesh', 'suresh', 'veeresh', 'mahesh'])
        }, 4000);
    })
}

function apiCall2(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(['fix homepage', 'get banner for fb', 'take a db backup'])
        }, 1000);
    })
}

function apiCall3() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            reject('oops!!! something went wrong')
        }, 500);
    })
}

Promise.all([apiCall1(), apiCall2(), apiCall3()]).then((values) => {
    console.log(values)
}).catch((err) => {
    console.log(err)
})


// function apiCall4(url){
//     return new Promise(function(resolve, reject){
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', url)
//         xhr.onreadystatechange = function(){
//             if(xhr.status === 200 && xhr.readyState == 4) {
//                 resolve(JSON.parse(xhr.responseText))
//             } else if( xhr.status == 404) {
//                 reject({
//                     notice: ''
//                 })
//             }
//         }
//     })
// }

// apiCall1().then((users) => {
//     console.log(users)
// })

// apiCall2().then((tasks) => {
//     console.log(tasks)
// })

