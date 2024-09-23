import React from 'react'
import { Link, useParams } from 'react-router-dom'
import getAddress from '../hookes/getAddressForUser';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useDataContext } from '../context/DataContext';

function Address() {
    const {username} = useParams();

    const {loading} = getAddress(username);

    const {setAddresses,addresses} = useDataContext();


    const handleDelete = async (id)=>{
      if(!confirm("sure to delete")) return 
        try {
          const res = await fetch(`/api/address/deleteAddress/${id}`,{
            method : "DELETE",
            headers: {
              'content-type' : "application/json"
            },
            body: JSON.stringify({username  })
          });
          const result = await res.json();
          if(result.error) return toast.error(result.error);
          setAddresses(prev=>{
             return prev.filter(a=>a._id!=id)
          })
          toast.success(result.data)
        } catch (error) {
          toast.error(error.message)
        }
    }

    if(loading) return <span className="loading loading-ring loading-lg"></span>
    return (
      <div className="flex gap-2 flex-wrap items-center justify-center pt-6">
          <Link to="/users" className="fixed top-4 left-4">
            <FaArrowAltCircleLeft className=" size-8"/>
          </Link>
        {
           addresses.map(address=>(
              <div key={address._id} className="flex flex-col bg-[aqua] text-black p-6 pt-8 rounded-lg relative" >
                <button onClick={()=>handleDelete(address._id)} className="absolute top-2 right-2">
                  <MdDelete className="size-6 hover:text-red-500" />
                </button>
                <span>
                  house number : {address.housenumber}
                </span>
                <span>
                  street : {address.street}
                </span>
                <span>
                  city : {address.city}
                </span>
                <span>
                  state : {address.state}
                </span>
                <span>
                  country : {address.country}
                </span>
                <span>
                  pincode : {address.pincode}
                </span>
              </div>
           ))
        }
      </div>
    )
}

export default Address
