import useFetchProducts from "./useFetchProducts";

let Products = () =>{
    let [products,setProducts]=useFetchProducts();
    return(
        <div>
            {
                products.map((value)=>{
                    return(
                        <div>
                            <p>{value.id}</p>
                            <p>{value.category}</p>
                            <p>{value.description}</p>
                            <img src={value.image} alt="" height={50}/>
                            <p>{value.price}</p>
                        </div>
                    )
                })
            }
            

        </div>
    )
}
export default Products;