import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDataContext } from '../context/DataContext';

function getUsers() {
    const [loading,setLoading] = useState(true);
    const {users,setUsers} = useDataContext()

    useEffect(()=>{
        (async()=>{
            try {
                const res = await fetch('/api/user/getUsers');
                const result = await res.json();
                setUsers(result.data);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        })();
    },[]);
  return {loading,users}
}

export default getUsers
