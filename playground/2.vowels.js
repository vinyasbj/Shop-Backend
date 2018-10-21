const str = 'make in india'; 
const vowels = 'aeiou';
let count = 0; 

for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])) {
        count++;
    }
}

console.log(count); 