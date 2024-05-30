import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import Home from './pages/Home/Home'
import SingleBlog from './pages/SingleBlog/SingleBlog'
import UpdateBlog from './pages/UpdateBlog/UpdateBlog'

function App() {

  return (
   <>
<BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/createBlog' element={<CreateBlog/>} />
            <Route path="/singleBlog/:id" element={<SingleBlog/>} />
            <Route path="/updateBlog/:id" element={<UpdateBlog/>} />
        </Routes>
    </BrowserRouter>   </>
  )
}

export default App
