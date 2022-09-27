const productNameComparision = function(){
    const promise = new Promise(
        function(resolve,reject){
            const productName = "Pencil";
            const productName1 = "Pencil";
            if(productName===productName1){
                resolve("Both Products are same");
            }else{
                reject("Both Products are not same");
            }
        }
    );
    return promise;
}

async function callPromise(){
    try{
        let output = await productNameComparision();
        console.log(output);
    }catch(error){
        console.log(error);
    }
}

callPromise();