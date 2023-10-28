import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    return (
        <div>

        <div className="text-center space-y-3">
            <h4 className="font-bold text-[#FF3811]">Popular Products</h4>
            <h1 className="text-4xl font-bold">Browse Our Products</h1>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {

                products.map(product => <ProductsCard key={product.id} product = {product}></ProductsCard>)

            }
        </div>


        <div className="mt-10 text-center">
        <button className="btn btn-outline btn-secondary">More Services</button>
        </div>


        
    </div>
    );
};

export default Products;