
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3003/admin/Fetch")
            .then((response) => {
                // console.log(response);
                setData(response.data.data); 
                setLoading(false);
                })
                .catch((err) => {
                    // console.error(err);
                    setError(err);
                    setLoading(false);
                    });
                    }, []);
                // console.log(data)// assuming response.data contains the array of users


              const DeleteItem=(name,index)=>{
               alert("Delte data ",name,index);
                // useEffect(()=>{
                    axios.delete("http://localhost:3003/admin/delete",{data:{name:name}}).then((response)=>{
                        setData(data.filter((item, idx) => idx !== index));
                        console.log(response, "delte user ");
                    }).catch((err)=>{
                        alert("Not delete ");
                        console.log(err+"Not delted ");
                    })
                // },[])
              }  

    return (
        <>
            <h1 style={{ textAlign: "center" }}>FetchData</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((res,index)=>
                            <tr >
                                <td>{index+1} </td>
                                <td>{res.name}</td>
                                <td>{res.email}</td>
                                <td><button className='btn btn-primary' onClick={()=>DeleteItem(res.name,index)} >Delete </button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

