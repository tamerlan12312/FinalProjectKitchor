import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../pages/About'
import AddToCart from '../pages/AddtoCart/AddToCart'
import BestSellers from '../pages/AddtoCart/BestSellers'
import ComingSoon from '../pages/ComingSoon'
import Contact from '../pages/Contact'
import Faqs from '../pages/Faqs'
import GridDetails from '../pages/GridListView/GridDetails'
import GridListView from '../pages/GridListView/GridListView'
import ListDetails from '../pages/GridListView/ListDetails'
import Home from '../pages/Home'
import OurPricing from '../pages/OurPricing'
import Project from '../pages/Project'
import ProjectDetails from '../pages/ProjectDetails'
import Service from '../pages/Service'
import Team from '../pages/Team'
import VirtualTours from '../pages/VirtualTours'
import { CartProvider } from 'react-use-cart'
import CartDetails from '../pages/AddtoCart/CartDetails'
import CartDescription from '../pages/AddtoCart/CartDescription'
import NotFoundPage from '../pages/NotFoundPage'
import Checkout from '../pages/AddtoCart/Checkout'
import YourBlog from '../pages/redux/YourBlog'
import YourBlogDetails from '../pages/redux/YourBlogDetails'
import DashBoard from '../pages/redux/admin/DashBoard'
import EditBlog from '../pages/redux/admin/update/EditBlog'
import AddBlog from '../pages/redux/admin/update/AddBlog'
import Login from '../pages/redux/admin/Login'
import { UserProvider } from '../pages/UserContext'
import ScrollToTop from '../components/ScrollToTop'
import { LanguageContextProvider } from '../components/langContext'
import Wishlist from '../pages/Wishlist'
import { WishlistProvider } from 'react-use-wishlist'

const AppRouter = () => {

  return (
   <>
<WishlistProvider>
<CartProvider>
<BrowserRouter>
<LanguageContextProvider>
<UserProvider>
  <ScrollToTop/>
<Header />
<Routes>
<Route path="/"   element={<Home/>}></Route>
    <Route path="/comingsoon"   element={<ComingSoon/>}></Route>
    <Route path="/contact"   element={<Contact/>}></Route>
    <Route path="/ourpricing"   element={<OurPricing/>}></Route>
    <Route path="/virtualtours"   element={<VirtualTours/>}></Route>
    <Route path="/about"   element={<About/>}></Route>
    <Route path="/team"   element={<Team/>}></Route>
    <Route path="/service"   element={<Service/>}></Route>
    <Route path="/faqs"   element={<Faqs/>}></Route>
    <Route path="/blog"   element={<GridListView/>}></Route>
    <Route path="/bloglist/:url"   element={<ListDetails/>}></Route>
    <Route path="/bloggrid/:url"   element={<GridDetails/>}></Route>
    <Route path="/project"   element={<Project/>}></Route>
    <Route path="/project/:url"   element={<ProjectDetails/>}></Route>
    <Route path="/addtocart"   element={<AddToCart/>}></Route>
    <Route path="/addtocart/:url"   element={<BestSellers/>}></Route>
    <Route path="/cartdesc/:url"   element={<CartDescription/>}></Route>
    <Route path="/cartdetails"   element={<CartDetails/>}></Route>
    <Route path="/checkout"   element={<Checkout/>}></Route>
    <Route path="/yourblog"   element={<YourBlog/>}></Route>
    <Route path="/yourblog/:id"   element={<YourBlogDetails/>}></Route>
    <Route path="/login"   element={<Login/>}></Route>
    <Route path="/dashboard"   element={<DashBoard/>}></Route>
    <Route path="/addblog"   element={<AddBlog/>}></Route>
    <Route path="/wishlist"   element={<Wishlist/>}></Route>
    <Route path="/edit/:id"   element={<EditBlog/>}></Route>
    <Route path="*"   element={<NotFoundPage/>}></Route>

</Routes>
<Footer/>
</UserProvider>
</LanguageContextProvider>
</BrowserRouter>
</CartProvider>
</WishlistProvider>
   </>
  )
}

export default AppRouter