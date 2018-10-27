let value5 ,value6; 

const get5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, 2000);
    })
}


const get6 = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6 + value);
        }, 100);
    })
}
   

// get5.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err); 
// });

Promise.all([get5(), get6(5)]).then((values) => {
    console.log(values); 
})

// Promise.race([get5, get6]).then((value) => {
//     console.log(value); 
// })

// get5().then((value) => {
//    return get6(value);
// }).then((res) => {
//     console.log(res); 
// })