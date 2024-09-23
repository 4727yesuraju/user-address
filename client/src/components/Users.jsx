import React, { useState } from 'react'
import getUsers from '../hookes/getUsers'
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useDataContext } from '../context/DataContext';
import TableRow from './TableRow';

function Users() {
  const {loading} = getUsers();

  const {users,setUsers} = useDataContext();


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
                       <TableRow  key={user._id} user={user} />
                    ))
                  }
          </tbody>
        </table>
      </div>
  )
}

export default Users
