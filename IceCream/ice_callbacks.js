let stocks = {
    Fruits: ["strawberry","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
//console.log(stocks.Fruits[2]);
//CALLBACKS
let order = (Fruit_name,call_production) => {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} is selected`);
        call_production();
    },2000);
};
let production = () => {
    setTimeout(()=>{
        console.log("production has started");
        setTimeout(()=>{
            console.log("Fruits have been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
                setTimeout(()=>{
                    console.log("Start the machine");
                    setTimeout(()=>{
                        console.log(`Ice cream is placed on ${stocks.holder[0]}`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} is selected`);
                            setTimeout(()=>{
                                console.log("ice cream is served");
                            },1000);
                        },2000);
                    },3000);
                },2000);
            },1000);
        },2000);

    },0000);
};

order(0,production);
