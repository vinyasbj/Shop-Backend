const User = function(data){
    this.username = data.username;
    this.email = data.email; 
    this.details = function(){
        return `${this.username} ${this.email}`; 
    }
}

module.exports = User