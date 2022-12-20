import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Layout1 = () => {

    const [date, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.email.value;
        const email = form.email.value;
        const phone = form.phone.value;

        // const user = { name, email, phone, date }
        // console.log(user);


        const user = {
            name,
            email,
            phone,
            date,

        }


        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('User Added')
                    form.reset();


                }
                else {
                    toast.error(data.message)

                }
            })
    }




    return (
        <form onSubmit={handleSubmit}>
            <div className="hero bg-base-500">
                <div className="card    shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className='flex'>
                            <div className='flex  flex-col items-start gap-5 mr-10'>
                                <h4 className='text-[22px] font-[400px] h-[40px]'>Full Name: </h4>
                                <h4 className='text-[22px] font-[400px] h-[40px]'>Date Of Birth: </h4>
                                <h4 className='text-[22px] font-[400px] h-[40px]'>Email: </h4>
                                <h4 className='text-[22px] font-[400px] h-[40px]'>Phone Number: </h4>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <input type="text" placeholder="" name='name' className="input bg-[#D9D9D9] w-[415px] h-[40px]" />
                                <input type="date" onChange={e => setDate(e.target.value)} placeholder="" name='date' className="input bg-[#D9D9D9] w-[415px] h-[40px]" />
                                <input type="email" placeholder="" name='email' className="input bg-[#D9D9D9] w-[415px] h-[40px]" />
                                <input type="text" placeholder="" name='phone' className="input bg-[#D9D9D9] w-[415px] h-[40px]" />



                            </div>

                        </div>
                        <div className='flex justify-end mt-7'>
                            <button className=' btn bg-blue-500 border-0 text-[17px] text-black px-14'
                                type='submit'
                                classes='px-24'
                            >Submit</button>
                        </div>





                    </div>
                </div>
            </div>
        </form>

    );
};

export default Layout1;