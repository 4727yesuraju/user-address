import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const  useDataContext = ()=>{
    return useContext(DataContext)
}


function DataContextProvider({children}) {
    const [users,setUsers] = useState([]);
    const [addresses,setAddresses] = useState([]);
  return (
    <DataContext.Provider value={{users,setUsers,addresses,setAddresses}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
