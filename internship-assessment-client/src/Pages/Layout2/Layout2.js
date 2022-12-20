import React, { useEffect, useState } from 'react';

const Layout2 = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])





    return (
        <div className='hero bg-base-500'>
            <div className="overflow-x-auto ">
                <table className="table">
                    <thead className='' >
                        <tr className='flex'>
                            <th className='w-[90px] flex justify-center'>#</th>
                            <th className='w-[180] flex justify-center'>Name</th>
                            <th className='w-[200px] flex justify-center'>DOB</th>
                            <th className='w-[200px] flex justify-center'>Email</th>

                        </tr>
                    </thead>
                    <tbody className='flex text-[15px] font-[400px] flex-col'>
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