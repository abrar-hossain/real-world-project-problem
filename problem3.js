const orderList = [{
    customerName: "Rasel",
    productName: "Laptop",
    quantity: 2,
    date: "11-08-2021"
},
{
    customerName: "Tareque",
    productName: "Microphone",
    quantity: 2,
        date: "10-08-2021"
    },
{
    customerName: "Emdadul",
    productName: "Monitor",
    quantity: 2,
        date: "11-08-2021"
    },]

function getOrderInfo(date) {
    const orderInfo = [];
        for (let i = 0; i < orderList.length; i++) {
            const object = orderList[i];
            for (let property in object)
            {
                if (property=="date" && object[property]==date) {
                    orderInfo.push(object);
                }
                }
            
    }
    return orderInfo
}
    
console.log(getOrderInfo("11-08-2021"));