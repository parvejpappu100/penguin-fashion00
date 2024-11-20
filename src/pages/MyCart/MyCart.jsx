import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";


const MyCart = () => {
    const [cart, setCart] = useState([]);
    const [itemToDelete, setItemToDelete] = useState(null); // Tracks the item to delete

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

   
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    
    const confirmDelete = () => {
        const updatedCart = cart.filter((item) => item.id !== itemToDelete.id);
        setCart(updatedCart); 
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
        setItemToDelete(null); 
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Cart</h2>
            {cart.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-500">Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-lg p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                                    <p className="text-gray-500">Price: <span className="text-gray-800">${item.price}</span></p>
                                    <p className="text-gray-500">Quantity: <span className="text-gray-800">{item.quantity}</span></p>
                                    <p className="text-gray-500 mt-1">Total: <span className="text-gray-800">${item.price * item.quantity}</span></p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    
                                    <button
                                        onClick={() => setItemToDelete(item)}
                                        className="btn btn-error bg-red-500 hover:bg-red-600 text-white"
                                    >
                                        <RiDeleteBin6Line></RiDeleteBin6Line>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                   
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-700">Subtotal</h3>
                            <p className="text-xl font-bold text-[#85A019]">${subtotal.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Taxes and shipping calculated at checkout.</p>
                        <button className="btn btn-success w-full mt-4 bg-[#85A019] hover:bg-green-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}

            
            {itemToDelete && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to delete this item?</h3>
                        <p className="py-4 text-gray-600">{itemToDelete.name}</p>
                        <div className="modal-action">
                            <button
                                onClick={confirmDelete}
                                className="btn btn-error bg-red-500 hover:bg-red-600 text-white"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setItemToDelete(null)} 
                                className="btn btn-outline"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCart;
