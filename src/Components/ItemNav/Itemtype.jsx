import React from 'react'
import '../../index.css'
import './itemtype.css'
import {AiOutlineDown} from 'react-icons/ai'
import {navimg1,navimg2,navimg3,navimg4,navimg5,navimg6,navimg7,navimg8,navimg9, navimg10} from './import'

const ShowBelowItem = () => {
     
    return (
        <div className='showonhover'>
               <ul className='showallitems' id='showallitems'>
                   <li><a href="">jeans</a> </li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>
                   <li><a href="">jeans</a></li>

               </ul>
        </div>
    )
}

const Itemtype = () => {
    return (
        <div className='main-items container section__padding'>
            <div className="allItems">

                <div className="inner-items">
                    <a href="#">
                        <img src={navimg1} alt="" />
                        Groccery
                    </a>
                    
                </div>
                <div className="inner-items">
                    <a href="#">
                        <img src={navimg2} alt="" />
                        Mobile
                    </a>
                </div>
                <div className="inner-items ">
                    {/* below ul  */}
                    <img src={navimg3} alt="" />
                    <a href="#" className='inner-downarrow'>Fashion
                         <AiOutlineDown className='down-icon'/>
                    </a>
                    <ShowBelowItem/>      
                </div>
                <div className="inner-items ">
                    {/* below ul  */}
                    <img src={navimg4} alt="" />
                    <a href="#" className='inner-downarrow'>Electronics
                    <AiOutlineDown className='down-icon'/>
                    
                    </a>
                    <ShowBelowItem/>      

                </div>
                <div className="inner-items ">
                    {/* below ul  */}
                    <img src={navimg5} alt="" />
                    <a href="#" className='inner-downarrow'>Home & Furniture
                    <AiOutlineDown className='down-icon'/>
                    
                    </a>
                    <ShowBelowItem/>      

                </div>
                <div className="inner-items">
                    <a href="#">
                        <img src={navimg6} alt="" />
                         Appliances
                    </a>
                </div>
                <div className="inner-items">
                    <a href="#">
                        <img src={navimg7} alt="" />
                        Travel
                    </a>
                </div>
                <div className="inner-items">
                    <a href="#" >
                        <img src={navimg8} alt="" />
                        Top offers
                    </a>
                </div>
                <div className="inner-items ">
                    {/* below ul  */}
                    <img src={navimg9} alt="" />
                    <a href="#" className='inner-downarrow'>Beauty, Toys & More
                    <AiOutlineDown className='down-icon'/>
                    
                    </a>
                    <ShowBelowItem/>      

                </div>
                <div className="inner-items ">
                    {/* below ul  */}
                    <img src={navimg10} alt="" />
                    <a href="#" className='inner-downarrow' >Two Wheelers
                    <AiOutlineDown className='down-icon'/>
                    
                    </a>
                    <ShowBelowItem/>      


                </div>
            </div>
           
        </div>
    )
}

export default Itemtype
