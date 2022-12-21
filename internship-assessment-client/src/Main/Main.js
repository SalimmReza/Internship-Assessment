import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Layout1 from '../Pages/Layout1/Layout1';
import Options from '../Pages/Options/Options';

const Main = () => {
    return (
        <div className=' mt-[10px] w-[80%] mx-auto'>
            <Options></Options>
            <Outlet></Outlet>
        </div>


    );
};

export default Main;