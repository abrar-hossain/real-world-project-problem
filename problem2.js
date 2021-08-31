var products = [{ productName: 'Laptop', productId: 1, stock: 100 },
    { productName: 'Microphone', productId: 2, stock: 200 },
{productName:'Monitor',productId:3,stock:500}];


function getDeSelectProduct(productName) {
    const otherProduct = [];
    for (let i = 0; i < products.length; i++) {
        let object = products[i];
        for (let property in object)
        {
            if (property=="productName" && object[property]!=productName) {
                otherProduct.push(object);
            }
            }
        
    }

    return otherProduct;
}
console.log(getDeSelectProduct("Monitor"));