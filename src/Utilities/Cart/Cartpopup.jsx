import React from 'react'; // Import React
import { RxCross2 } from 'react-icons/rx'; // Import RxCross2 from react-icons/rx
import { ScrollShadow } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { Image } from '@nextui-org/react';
import { Divider } from "@nextui-org/react";
import '../../index.css'; // Import the CSS file correctly
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

import cartSlice, {deleteCartItem} from '../../redux/Slices/cartSlice';


//TODO: Make sure that clicking x unrenders the popup

export default function CartPopup() {

    const usersCartItems = useSelector(state => state.myCart.myCart)
    const dispatch = useDispatch();
    console.log('cartPopup.jsx: ', usersCartItems);


    function renderCart() {
        if (usersCartItems.length == 0) {
            return (
                <text className='self-center relative top-20'>
                    <h2 className='relative left-10'>Cart is empty!</h2>
                    <h2>Tap Cart again to exit</h2>
                </text>
                
            )
        } else {
            return (
                <div className='flex flex-row flex-wrap m-1'>
                    {usersCartItems.map(item => (
                        
                        <div key={item.id} className='flex flex-col w-[100%]'>
                            <div className='self-end relative left-5'>
                            <Button size='sm' variant='light' onClick={()=> dispatch(deleteCartItem(item))}><FaTrash/></Button>
                            </div>
                            <div className='self-center'>
                                <Image
                                    src={item.thumbnail}
                                    width={200}
                                    alt={item.title}
                                />
                            </div>

                            <div id='data-section' className='self-center relative left-[1em] w-[50%]'>
                                <text>
                                    <div id='item name' className='relative'>
                                    <p className='text-base inline'>Name: </p>
                                    <p className='text-sm inline'>{item.title}</p>
                                    </div>
                                    <div id='brand name'className='relative'>
                                    <p className='text-base inline'>Brand: </p>
                                    <p className='text-sm inline'>{item.brand}</p>
                                    </div>
                                    <div id='price' className='relative'>
                                    <p  className='text-base inline'>Price: </p>
                                    <p className='text-sm inline'>${item.price}</p>
                                    </div>
                              
                                  
                                </text>
                            </div>
                            <Divider className="my-3"/>
                        </div>
                    ))}
                </div>
            )
        }
    }


    return (
        <div id='popupContainer' className="flex flex-col shadow-2xl bg-stone-600 z-20 relative right-[9em] w-[12.2em] h-[12em] rounded-md overflow-y-scroll overflow-x-hidden">
            {renderCart()}

        </div>
    );
}




