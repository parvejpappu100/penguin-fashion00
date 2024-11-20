import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import ProductCard from '../ProductCard/ProductCard';

const WomenJacket = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("allProducts.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const womenJackets = products?.filter(product => product?.category == "women");

    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-24'>
            <h3 className='text-3xl font-bold uppercase'>Women Jacket</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    womenJackets.slice(0, 3).map(womenJacket => <ProductCard
                        key={womenJacket._id}
                        image={womenJacket.image}
                        name={womenJacket.name}
                        details={womenJacket.details}
                        price={womenJacket.price}
                        id={womenJacket._id}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default WomenJacket;