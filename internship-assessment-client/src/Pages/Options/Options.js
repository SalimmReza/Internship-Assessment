import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Options = () => {

    let activeStyle = {
        backgroundColor: 'gray'


    };

    return (
        <div className='flex gap-2'>

            <NavLink to='/layout1'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined}

            >
                <button className='h-[34px] w-[100px] bg-[#E0E0E0] rounded-[14px] text-[13px]'>Layout1</button>

            </NavLink>
            <NavLink to='/layout2'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
            >
                <button className='h-[34px] w-[100px] bg-[#E0E0E0] rounded-[14px] text-[13px]'>Layout2</button>
            </NavLink>
            <NavLink to='/layout3'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
            >
                <button className='h-[34px] w-[100px] bg-[#E0E0E0] rounded-[14px] text-[13px]'>Layout3</button>
            </NavLink>

        </div >
    );
};

export default Options;