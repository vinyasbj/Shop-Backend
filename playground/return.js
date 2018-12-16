function somefunction(){
    return (function(){
        return (function(){
            return 'from inner iffe'
        }())
    }())
}

console.log(somefunction())