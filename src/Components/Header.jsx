import {useState} from 'react'
import {FaOpencart, FaShoppingCart} from 'react-icons/fa'
import Hamburger from 'hamburger-react';
// import {MyInput as Searchbar} from '../Utilities/Searchbar/Searchbar'

function Header() {

    const [isOpen, setOpen] = useState(false);



    // Define styles object
    const listItemStyle = {
        display: 'inline',
        marginRight: '1rem',
        fontSize: '25px'
    };

    const shoppingItems = {
        position: 'relative',
        left: '83%',
        top: '85%'

    };

    

    return (
        <div className="h-[5rem] bg-[#F5A524]">
            <ul className="flex">


            <div className="relative left-[3%] top-[15%]">
               <li style={listItemStyle}><Hamburger toggled={isOpen} toggle={setOpen} size={30} /></li>
            </div>
                
                <div>
                    
                   
                </div>




                <div style={shoppingItems} className='flex'>
                <li style={listItemStyle} className='relative right-[80%] top-[25%]'><FaShoppingCart size={30}/></li>
                </div>

               
            </ul>
        </div>
    );
}

export default Header;
