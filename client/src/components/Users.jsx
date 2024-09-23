import React from 'react'
import getUsers from '../hookes/getUsers'
import { Link } from 'react-router-dom';
import Header from './Header';

function Users() {
  const {loading,users} = getUsers();
  console.log("users : ",users,loading);
  if(loading) return <span className="loading loading-ring loading-lg"></span>
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-12">
        <table>
          <thead>
            <tr>
              <th>user</th>
              <th>no.of addresses</th>
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
                      </tr>
                    ))
                  }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users
