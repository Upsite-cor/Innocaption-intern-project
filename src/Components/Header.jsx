import { useState } from 'react'
import { FaOpencart, FaShoppingCart } from 'react-icons/fa'
import Hamburger from 'hamburger-react';
import Searchbar from '../Utilities/Searchbar/Searchbar';
import { Button } from '@nextui-org/react';
import CartPopup from '../Utilities/Cart/Cartpopup';

import cartSlice, {showCart, hideCart} from '../redux/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const [isOpen, setOpen] = useState(false);
    const [popup, setPopup] = useState(false);

    const dispatch = useDispatch();
    const isRevealCart = useSelector(state => state.myCart.showCart);

    console.log('Header.JSX', isRevealCart)

    // Define styles object
    const listItemStyle = {
        display: 'inline',
        marginRight: '1rem',
        fontSize: '25px'
    };
    
 

    return (
        <div className="h-[5rem] bg-[#F5A524]">
            <ul className="flex">
                <div className="relative left-[3%] top-[0.8em]">
                    <li style={listItemStyle}><Hamburger toggled={isOpen} toggle={setOpen} size={30} /></li>
                </div>
                <div className="relative left-[37%] top-[0.8em] w-[20em]">
                    <Searchbar />
                </div>
                <div>
                    <li style={listItemStyle} className='flex-col relative left-[40em] top-[1em]'>
                        <Button isIconOnly variant='light' onClick={() => {
                            if(!isRevealCart)
                                dispatch(showCart());
                            else
                                dispatch(hideCart());
                        }}>
                            <FaShoppingCart size={30} />
                        </Button>
                        {isRevealCart && <CartPopup/>}
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Header;
