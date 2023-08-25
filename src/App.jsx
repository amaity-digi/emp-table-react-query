import { Route, Routes } from "react-router-dom"
import PostLit from "./pages/PostLit"


function App() {


  return (
    <div>
    <Routes>
      <Route path="/" element={<PostLit />}/>
    </Routes>
    </div>
  )
}

export default App
