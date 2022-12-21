import React, { useEffect, useState } from 'react';
import './Layout2.css'


const Layout2 = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])





    return (

        <div className=' bg-base-500'>
            <div>
                <h1 className='table-h1'>Table</h1>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    <thead className='' >
                        <tr>
                            <th className=''>#</th>
                            <th className=''>Name</th>
                            <th className=''>DOB</th>
                            <th className=''>Email</th>

                        </tr>
                    </thead>
                    <tbody className=' text-[15px] font-[400px] flex-col'>
                        {
                            details.map((detail, i) => <tr
                                key={detail._id}
                            >
                                <th>{i + 1}</th>
                                <td>{detail.name}</td>
                                <td>{detail.date}</td>
                                <td>{detail.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Layout2;