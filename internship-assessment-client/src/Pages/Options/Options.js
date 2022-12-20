import React from 'react';
import { Link } from 'react-router-dom';

const Options = () => {
    return (
        <div className=''>
            <button className='h-[34px] w-[100px] bg-[#E0E0E0] rounded-[14px] text-[13px]'><Link to='/layout1'>Layout1</Link></button>
            <button className='h-[34px] w-[100px] bg-[#E0E0E0] rounded-[14px] text-[13px]'><Link to='/layout2'>Layout2</Link></button>
            <button className='h-[34px] w-[100px] bg-[#E0E0E0] rounded-[14px] text-[13px]'><Link to='/layout3'>Layout3</Link></button>

        </div>
    );
};

export default Options;