
let users; 
function getUsers(){
    setTimeout(() => {
        users = [{ name: 'ani' }]; 
        console.log(users); 
    }, 2000);
}

getUsers(); 

function modifyUsers(){
    console.log(users); 
}
modifyUsers(); 