export function productQueryDataFormeter(queryData) {
    // this function consvert product price and size query data to array  
    const price = [];
    const size = []
    // let search;
    if (queryData.hasOwnProperty("price")) {
        for (const priceData of queryData.price.split(',')) {
            const priceObj = { minVal: null, maxVal: null };
            if (priceData.includes("Under")) {
                const data = priceData.split(" ");
                priceObj.minVal = 0;
                priceObj.maxVal = Number(data[1]);
            } else {
                const data = priceData.split("-");
                priceObj.minVal = Number(data[0]);
                priceObj.maxVal = Number(data[1]);
            }
            price.push(priceObj)

        }
        // console.log(productData.data.products);

    }
    if (queryData.hasOwnProperty("size")) {
        for (const sizeData of queryData.size.split(',')) {
            size.push(sizeData)
        }
    }
    return {
        price,
        size
    }
}