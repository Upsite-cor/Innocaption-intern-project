import { useState } from 'react'
import { FaOpencart, FaShoppingCart } from 'react-icons/fa'
import Hamburger from 'hamburger-react';
import Searchbar from '../Utilities/Searchbar/Searchbar';
function Header() {
    const [isOpen, setOpen] = useState(false);

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
                <div className='flex'>
                    <li style={listItemStyle} className='relative left-[40em] top-[1em]'><FaShoppingCart size={30} /></li>
                </div>
            </ul>
        </div>
    );
}

export default Header;
