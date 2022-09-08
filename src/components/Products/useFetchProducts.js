import { useEffect, useState } from "react"
import axios from 'axios';

let useFetchProducts = () =>{
    let [products,setProducts]=useState([]);
    let [loading,setLoading]=useState();
    // async function fetchProducts(){
    //     let productRes=await fetch('https://fakestoreapi.com/products');
    //     let products=await productRes.json();
    //     setProducts(products);
    //     console.log("products",await productRes.json());

    // }

    async function fetchProducts(){
        
        let products=await axios.get('https://fakestoreapi.com/products');
        setProducts(products.data);
        

    }

    useEffect(()=>{
        fetchProducts();

    },[])
    
    return [products,setProducts];
       
}
export default useFetchProducts;