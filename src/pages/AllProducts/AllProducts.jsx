import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import ProductCard from '../../components/ProductCard/ProductCard';

const AllProducts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("allProducts.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div className='max-w-[1240px] mx-auto px-4 mt-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    products.slice(0, showAll ? products?.length : 6).map(product => <ProductCard
                        key={product._id}
                        image={product.image}
                        name={product.name}
                        details={product.details}
                        price={product.price}
                        id={product._id}
                    ></ProductCard>)
                }
            </div>
            <div className="text-center my-5">
                {!showAll && (
                    <button
                        onClick={handleShowAll}
                        className="btn bg-[#85A019] hover:bg-[#85A019] text-white "
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    );
};

export default AllProducts;