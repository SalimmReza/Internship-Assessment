import React from 'react';

const Layout3 = () => {
    return (
        <div className='px-40'>


            <div className='grid grid-cols-8 grid-rows-6 gap-x-8 gap-y-8 '>
                <div className='bg-[#DA1E5D] text-white text-[22px] font=[700px]  rounded-lg shadow-xl row-span-3
                col-span-8 '>
                    <h1 className='flex justify-center items-center h-[100%]'>card1</h1>
                </div>
                <div className='bg-[#DA1E5D] text-white text-[22px] font=[700px] rounded-lg shadow-xl  row-span-6 col-span-2' >
                    <h1 className='flex justify-center items-center h-[100%]'>card2</h1>
                </div>
                <div className='bg-[#DA1E5D] text-white text-[22px] font=[700px] rounded-lg shadow-xl  row-span-6 col-span-4' >
                    <h1 className='flex justify-center items-center h-[100%]'>card3</h1>
                </div>
                <div className='bg-[#DA1E5D] text-white text-[22px] font=[700px] rounded-lg shadow-xl  row-span-6 col-span-2
                '>
                    <h1 className='flex justify-center items-center h-[100%]'>card4</h1>

                </div>


                <div className='bg-[#DA1E5D] text-white text-[22px] font=[700px] rounded-lg shadow-xl row-span-3 
                col-span-8' >
                    <h1 className='flex justify-center items-center h-[100%]'>card5</h1>
                </div>
            </div>





        </div>
    );
};

export default Layout3;