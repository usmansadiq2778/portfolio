/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, US } from '../assets';

// navLinks
const Navbar = () => {
    const [Active, setActive] = useState('');
    const [Toggele, setToggle] = useState(false);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary  `}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={US}
                        alt='logo'
                        className='w-15 h-9 object-contain'
                    />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        Usman &nbsp;
                        <span className='sm:block hidden '>
                            | Full Stack developer{' '}
                        </span>
                    </p>
                </Link>
                <ul className=' list-none hidden sm:flex flex-row gap-10 '>
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${
                                Active === Link.title
                                    ? ' text-white '
                                    : ' text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}> {Link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden justify-end flex flex-1  items-center'>
                    <img
                        src={Toggele ? close : menu}
                        alt='menu'
                        className=' w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!Toggele)}
                    />
                    <div
                        className={`${
                            !Toggele ? 'hidden' : 'flex'
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10 `}
                    >
                        <ul className=' list-none flex justify-end  items-start flex-col gap-5 '>
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`${
                                        Active === Link.title
                                            ? ' text-white '
                                            : ' text-secondary'
                                    }    font-poppins font-medium text-[16px] `}
                                    onClick={() => {
                                        setActive(Link.title);
                                        setToggle(!Toggele);
                                    }}
                                >
                                    <a href={`#${Link.id}`}> {Link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
