function Product(data){
    this.name = data.name; 
    this.price = data.price; 
    this.details = function(){
        return `${this.name} INR ${this.price}`; 
    }
}

module.exports = {
    Product
}