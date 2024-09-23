import React, { useState } from 'react'
import toast from 'react-hot-toast';

function Header() {

    const [loading,setLoading] = useState(false);
    const [inputs,setInputs] = useState({});
    const handleChange  = (e)=>{
        setInputs({...inputs,[e.target.id] : e.target.value})
    }

    console.log(inputs);
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
            console.log("result : ",result);
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

   /*  "housenumber": "1343",
      "street": "123 street",
      "city": "vijayawada",
      "state": "ap",
      "country": "ind",
      "pincode": "52001" */
  return (
    <div>
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>create</button>
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
                <button className={`btn ${loading && "loading loading-dots loading-lg"}`} >submit</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Header


function isValid(username,address){
    const {housenumber, street, city , state, country, pincode} = address;
    return ( username && housenumber && street && city && state && country && pincode ) ? true : false ;
}