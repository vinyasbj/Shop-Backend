class Product {
    static findById(id){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                let product = Product.data.find(product => product.id == id)
                if(product) {
                    resolve(product)
                } else {
                    reject({ notice: 'record not found'})
                }
            }, 1000);
        })
    }

}

Product.data = [
    { id: 1, name: 'marker'}, 
    { id: 2, name: 'scale'}
]

Product.findById(10).then(function(product){
    console.log(product)
}).catch(function(err){
    console.log(err)
})