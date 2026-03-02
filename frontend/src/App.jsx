import DasboardLayout from './layout/DashboardLayout'
import MainLayout from './layout/mainLayout'
import About from './pages/user/About'
import Home from './pages/user/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style/App.css'
import { Routes, Route } from "react-router-dom"
import User from './pages/admin/User'
import Dasboard from './pages/admin/Dasboard'
import Role from './pages/admin/Role'
import Category from './pages/admin/Category'
import Product from './pages/admin/Product'

function App() {


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route element={<DasboardLayout />}>
        <Route path='/dashboard' element={<Dasboard />} />
        <Route path='/dashboard/user/' element={<User />} />
        <Route path='/dashboard/role' element={<Role />} />
        <Route path='/dashboard/category' element={<Category />} />
        <Route path='/dashboard/product' element={<Product />} />
      </Route>
    </Routes>


  )
}

export default App
