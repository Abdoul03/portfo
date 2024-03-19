import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import "./styles/App.css"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/portfo" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
