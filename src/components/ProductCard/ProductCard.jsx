import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import Swal from 'sweetalert2';

const ProductCard = ({ image, name, details, price, id }) => {

    const handleBuyNow = () => {
       
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        const existingProductIndex = cart.findIndex((product) => product.id === id);

        if (existingProductIndex >= 0) {
            
            cart[existingProductIndex].quantity += 1;
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add to cart successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            
            cart.push({ id, name, price, quantity: 1 });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add to cart successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }

        
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log("Cart updated:", cart);
    };


    return (
        <div className="p-5 shadow-md border">
            <div className='flex justify-center'>
                <img className='w-2/4' src={image} alt="" />
            </div>
            <h3 className='mt-5 font-semibold text-2xl'>{name}</h3>
            <p>{details}</p>
            <div className='flex justify-between items-center my-4'>
                <h4 className='font-bold text-2xl text-[#FABE4C]'>$ {price}</h4>
                <button onClick={handleBuyNow} className='btn bg-[#85A019] hover:bg-[#85A019] text-white '><MdShoppingCart></MdShoppingCart> Buy Now</button>
            </div>
        </div>
    );
};

export default ProductCard;