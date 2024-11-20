import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import ProductCard from '../ProductCard/ProductCard';

const MensJacket = () => {


    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("allProducts.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const mensJackets = products?.filter(product => product?.category == "mans");


    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-24'>
            <h3 className='text-3xl font-bold uppercase'>Man Jacket</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    mensJackets.slice(0, 3).map(mensJacket => <ProductCard
                        key={mensJacket._id}
                        image={mensJacket.image}
                        name={mensJacket.name}
                        details={mensJacket.details}
                        price={mensJacket.price}
                        id={mensJacket._id}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default MensJacket;