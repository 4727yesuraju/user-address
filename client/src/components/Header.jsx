import React, { useState } from 'react'
import { TbBrandAbstract } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDataContext } from '../context/DataContext';

function Header() {
  const [loading,setLoading] = useState(false);
  const [inputs,setInputs] = useState({});
  const handleChange  = (e)=>{
      setInputs({...inputs,[e.target.id] : e.target.value})
  }

  const {setUsers} = useDataContext();
  async function handleSubmit(e){
      e.preventDefault();
      if(!isValid(inputs.username,inputs)) return toast.error("all fields are required")
      setLoading(true);
      try {
          const res = await fetch('/api/register',{
              method : "POST",
              headers : {
                  'content-type' : 'application/json'
              },
              body : JSON.stringify({username : inputs.username,address : inputs})
          })
          const result = await res.json();
          if(result.error) return toast.error(result.error);
          setUsers(prevUser=>{
              let flag = false;
              const updatedusers = prevUser.map(user=>{
                if(user.username === result.data.username){
                  flag  = true;
                  user.addresses.push(1)
                  return {...user}
                }
                return {...user}
              })
              if(!flag) return [...updatedusers,result.data];
              return [...updatedusers]
          })
          document.getElementById('my_modal_1').close();
      } catch (error) {
          toast.error(error.message)
      }finally{
          setLoading(false);
      }
  }

  addEventListener('keydown',(e)=>{
      if(e.key === 'Escape'){
          setInputs({});
      }
  })

  return (
    <header className="flex  items-start justify-between gap-4 bg-black text-gray-300 p-4 px-6 shadow-xl sticky top-0">
        <Link to="/" className="gap-1 sm:flex font-bold bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
            <MdLocationPin className="size-6 text-[aqua]"/> <span className="hidden sm:block"> User | Address</span>
        </Link>
        <div>
          <button className="bg-[aqua] text-black rounded-lg px-3" onClick={()=>document.getElementById('my_modal_1').showModal()}>create</button>
          <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="modal-action">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_1').close()}>✕</button>
                    <form method="dialog" onSubmit={handleSubmit} className="flex flex-col gap-2 flex-start w-full p-5">
                      
                        <input type="text" id="username" placeholder='username' value={inputs.username || ""} onChange={handleChange}/>
                        <input type="text" id="housenumber" placeholder='housenumber' value={inputs.housenumber || ""} onChange={handleChange}/>
                        <input type="text" id="street" placeholder='street' value={inputs.street || ""} onChange={handleChange}/>
                        <input type="text" id="city" placeholder='city' value={inputs.city || ""} onChange={handleChange}/>
                        <input type="text" id="state" placeholder='state' value={inputs.state || ""} onChange={handleChange}/>
                        <input type="text" id="country" placeholder='country' value={inputs.country || ""} onChange={handleChange}/>
                        <input type="text" id="pincode" placeholder='pincode' value={inputs.pincode || ""} onChange={handleChange}/>
                        <button className={`bg-orange-500 text-black rounded-lg py-2 ${loading && "loading loading-dots loading-lg"}`} >submit</button>
                    </form>
                </div>
              </div>
        </dialog>
    </div>
    </header>
  )
}

export default Header


function isValid(username,address){
  const {housenumber, street, city , state, country, pincode} = address;
  return ( username && housenumber && street && city && state && country && pincode ) ? true : false ;
}