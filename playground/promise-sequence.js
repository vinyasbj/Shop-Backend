// api - getUser() - 1 second
// getUserTask() - 2 second


// ruby 
/*
    user = User.find(1)
    tasks = user.tasks
*/

// js
/*
    User.find(1).then(user => {
        user.tasks().then(tasks => {
            console.log(tasks)
        })
    })
*/

function getUser(id){
    return new Promise(function(resolve, reject){
        const users = [
            { id: 1, name: 'gokul' },
            { id: 2, name: 'ramesh' }, 
            { id: 3, name: 'chetan'}
        ]
        setTimeout(() => {
          
            let user = users.find(user => user.id == id)
            if(user) {
                resolve(user)
            } else {
                reject('user not found')
            }
            // reject('server 1 is down')
        }, 1000);
    })
}

function getUserTasks(userId){
    return new Promise(function(resolve, reject){
        const tasks = [
            { id: 1, userId: 1, title: 'fix website'}, 
            { id: 2, userId: 1, title: 'fix seo'}, 
            { id: 3, userId: 2, title: 'get more candidates'}
        ]
        setTimeout(() => {
           let userTasks = tasks.filter(task => task.userId == userId)
           resolve(userTasks)
        }, 2000);
    })
}

getUser(4).then(function(user){
  console.log(user)
  return getUserTasks(user.id)
})
.then((tasks) => {
    console.log(tasks)
})
.catch((err) => {
    console.log(err)
})

