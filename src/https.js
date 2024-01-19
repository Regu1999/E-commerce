async function  fetchProduct(){
    try {
        const responce = await fetch("http:/localhost:3000/products");
        
    } catch (error) {
        console.log(error);
    }
}