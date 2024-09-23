import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';

function TableRow({user}) {
    
    const [loading,setLoading] = useState(false);
    const {users,setUsers} = useDataContext();
  const handleDelete = async (username)=>{
    if(!confirm("are you sure to delete " + username)) return;
       setLoading(true);
       try {
          const res = await fetch(`/api/user/deleteUser/${username}`,{
            method : 'delete'
          })
          const result = await res.json();
          if(result.error) return toast.error(result.error);
          setUsers([...users.filter(user=>user.username!==username)])
          toast.success(result.data);
       } catch (error) {
           toast.error(error.message)
       }finally{
           setLoading(false)
       }
  }
  return (
    <tr>
        <td>
            <Link to={`/address/${user.username}`}>
                {user.username}
            </Link>
        </td>
        <td>
            <span>
            {user.addresses.length}  
            </span>
        </td>
        <td>
            <button onClick={()=>handleDelete(user.username)}>
                {loading ?  <span className="loading loading-spinner text-accent"></span> : <MdDelete className="size-6 hover:text-red-500" />}
            </button>
         </td>
  </tr>
  )
}

export default TableRow
