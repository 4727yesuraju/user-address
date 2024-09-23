import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDataContext } from '../context/DataContext';

function getAddress(username) {
    const [loading,setLoading] = useState(true);
    
    const {addresses,setAddresses} = useDataContext()
//address/getAddress/yesu raju

    useEffect(()=>{
        (async()=>{
            try {
                const res = await fetch(`/api/address/getAddress/${username}`);
                const result = await res.json();
                setAddresses(result.data);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        })();
    },[]);
  return {loading,addresses}
}

export default getAddress
