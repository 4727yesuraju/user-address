import React, { useState } from 'react'
import getUsers from '../hookes/getUsers'
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useDataContext } from '../context/DataContext';

function Users() {
  const {loading} = getUsers();

  const {users,setUsers} = useDataContext();


  const handleDelete = async (username)=>{
    if(!confirm("are you sure to delete " + username)) return;

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
       }
  }
  if(loading) return <span className="loading loading-ring loading-lg"></span>
  if(!loading && users.length===0) return <div  className="text-center text-xl mt-10">
    <h1>No Users found!😔 </h1>
    <h1>{"Let's"} create new user</h1>
  </div> 
  return (
      <div className="flex items-center justify-center mt-12">
        <table className="gap-4">
          <thead>
            <tr>
              <th>user</th>
              <th>no.of addresses</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
                  {
                    users.map(user=>(
                      <tr key={user._id}>
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
                               <MdDelete className="size-6 hover:text-red-500" />
                        </button>
                        </td>
                      </tr>
                    ))
                  }
          </tbody>
        </table>
      </div>
  )
}

export default Users
