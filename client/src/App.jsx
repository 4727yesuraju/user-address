import { Route, Routes } from "react-router-dom"
import Users from "./components/Users"
import { Toaster } from "react-hot-toast"
import Address from "./components/Address"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<>
            <Header />
            <Users />
          </>
          } />
        <Route path="/address/:username" element={<Address />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
