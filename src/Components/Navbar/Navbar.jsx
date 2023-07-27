import React from 'react'
import logo from '../../images/logo.svg'
import PlusIcon from '../../images/plus.svg'
import './navbar.css'
import '../../index.css'
import {AiOutlineSearch,AiOutlineShoppingCart,AiOutlineDown} from 'react-icons/ai'
import Image1 from '../../images/nav4.svg'
import {AiOutlineUser} from 'react-icons/ai'
import {CgMenuBoxed} from 'react-icons/cg'
import topImg1 from '../../images/top1.svg'
import topImg2 from '../../images/top2.svg'
import { Link } from 'react-router-dom'
const MobileMenu = () =>{
      return(
            <div className='content__hover'>
                  <ul className='innerUrl'>
                         <li><a href="#">My Profile</a></li>
                         <li><a href="#">Flipkart Plus Zone</a></li>
                         <li><a href="#">Orders</a></li>
                         <li><a href="#">Wishlist</a></li>
                         <li><a href="#">Rewards</a></li>
                         <li><a href="#">Gift card</a></li>

                  </ul>
            </div>
      )
}
const MobileMenuOne =() =>{
      return(
      <div className="content__hover-one">
              <ul className='innerUrl'>
                   <li><a href="">Notification Preference</a></li>
                   <li><a href="">24 X 7 Customer Support</a></li>
                   <li><a href="">Advertise</a></li>
                   <li><a href="">Download App</a></li>

              </ul>
      </div>
      )
}


const Navbar = () => {
  return (

    <nav >
          <div className="mobile__links-mob">
                <div className="btn-top">
                      <a href=""><img src={topImg1} alt="" /></a>
                </div>
                <div className="btn-top">
                      <a href=""><img src={topImg2} alt="" /></a>
                </div>
          </div>
          <div className="logo">
                <img src={logo} alt="" />
                <div className="inner_logo">
                      <a href="">Explore<span> Plus</span> <img src={PlusIcon} alt="" /> </a>
                </div>
          </div>
          <div className="searchInput">
                <AiOutlineSearch/>
               <input type="text" name="text" id="" placeholder='Search for Products, Brands and More' />
          </div>
          <div className="nav-links">
                 <ul >
                    <li> <a href=""><CgMenuBoxed className='icon-nav'/><span className='MobileHidden'>Become a Seller</span></a> </li>
                    <li><a href=""><AiOutlineUser className='icon-nav'/><span className='MobileHidden'>Sign in </span>  <AiOutlineDown className='down-arrow'/></a>
                         <MobileMenu/>
                    </li>
                    <li> <Link to="/cart"><AiOutlineShoppingCart className='icon-nav'/><span className='MobileHidden'>Cart</span></Link></li>
                    <li><a href=""><img src={Image1} alt="" /></a>
                         <MobileMenuOne/>
                    </li>
                 </ul>
          </div>
    </nav>
  ) 
}

export default Navbar
