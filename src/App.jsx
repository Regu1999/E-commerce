import { useState, useEffect } from "react";
export default function App() {
  const [product, setProduct] = useState()
  useEffect(() => {
    async function fetchData() {
      try {
        const responce = await fetch("http://localhost:3000/products");
        const responceData = await responce.json();
        const product=await responceData.places.data.products;
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    // setProduct(fetchData())
  }, [])
  return (
    <div className="shapePractice">

    </div>)

}  