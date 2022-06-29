let stocks = {
    Fruits: ["strawberry","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
//console.log(stocks.Fruits[2]);
let is_shop_open = true;

let order = (time,work) =>{
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time);
        }
        else{
            reject(console.log("our shop is closed"));
        }
    });
};
order(2000,()=>(console.log(`${stocks.Fruits[0]} is selected`)))
.then(()=>{
    return order(0000, ()=>console.log("Production has started"));
})
.then(()=>{
    return order(2000,()=>console.log("Fruit has been chopped"));
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
    })
})
.then(()=>{
    return order(1000,()=>console.log("Start the machine"))
})
.then(()=>{
    return order(2000,()=>{
        console.log(`IceCream is placed on ${stocks.holder[0]}`);
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]} is selected`)
    })
})
.then(()=>{
    return order(1000,()=>console.log("ice cream is served"))
})

.catch(()=>{
    console.log("Customer left")
})
.finally(()=>{
    console.log("day ended,shop is closed");
});