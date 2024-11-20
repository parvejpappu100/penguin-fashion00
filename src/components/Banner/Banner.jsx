import React from 'react';
import model from '../../assets/images/model.png';
import { MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';



const Banner = () => {
    return (
        <div className='bg-[#FFFBF0]  pt-16 lg:pt-24 pb-[26px]'>
            <div className='max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between  '>
                <div>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-3 md:mb-4 lg:mb-5 text-[#FABE4C]'>Be the Penguins</h3>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase'>Of Winter</h3>
                    <p className='my-5 text-xl'>Lorem Ipsum is simply dummy text of the printing <br />
                        and typesetting industry.</p>
                    <Link to={"/allProducts"}>
                        <button className='btn bg-[#85A019] hover:bg-[#85A019] text-white '><MdShoppingCart></MdShoppingCart> Buy Now</button>
                    </Link>
                </div>
                <div>
                    <img src={model} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;