import React from 'react';
import img from "../../assets/images/shopping.png";
import house from '../../assets/images/house.png';
import box from '../../assets/images/box.png';
import question from '../../assets/images/question.png';


const Info = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-4 lg:px-0  mt-24 flex flex-col md:flex-row gap-12 items-center'>
            <div className='w-full'>
                <div className='flex items-center gap-5 shadow-md p-4'>
                    <img className='w-[60px]' src={house} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>Find the Perfect Fit</h3>
                        <p>Everybody is different, which is why we offer styles for every body.</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 shadow-md p-4 my-4'>
                    <img className='w-[60px]' src={box} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>Free Exchanges</h3>
                        <p>One of the many reasons you can shop with peace of mind.</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 shadow-md p-4'>
                    <img className='w-[60px]' src={question} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>Contact Our Seller</h3>
                        <p>They are here to help you. That's quite literally what we pay them for.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <img className='w-4/5' src={img} alt="" />
            </div>
        </div>
    );
};

export default Info;