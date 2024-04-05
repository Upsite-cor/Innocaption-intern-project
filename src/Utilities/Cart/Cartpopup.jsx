import React from 'react'; // Import React
import { RxCross2 } from 'react-icons/rx'; // Import RxCross2 from react-icons/rx
import { ScrollShadow } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import '../../index.css'; // Import the CSS file correctly

import cartSlice, {hideCart} from '../../redux/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

//TODO: Make sure that clicking x unrenders the popup

export default function CartPopup() {
    const dispatch = useDispatch();



    return (
        <div id='popupContainer' className="flex flex-col bg-stone-600 z-20 relative right-[9em] w-[12.2em] h-[12em] ">
            <div className='self-end'>
            <Button isIconOnly variant='light' onClick={() => {
                dispatch(hideCart());

            }}>
                <RxCross2/>
            </Button>

            </div>
            <ScrollShadow className='w-[300px] h-[400px]'>

            </ScrollShadow>
        </div>
    );
}




