import React from 'react'
import { useProductContext } from '../../AppContext/Context'
import Navbar from '../../Components/Navbar/Navbar';
import Itemtype from '../../Components/ItemNav/Itemtype';
import './Allproducts.css';


const AllProducts = () => {
    const { isLoading, products, products1 } = useProductContext();
    const elec = products1.filter((item) => {
        return item.category === "electronics"
    })
    return (
        <div className='electoronics'>
            <Navbar />
            <Itemtype />
            <div className="electoronics">
                <h2>Best of Electoronics</h2>
                <div className="main-grid">
                    {
                        products.map((item) => {

                            return (<div className="grid-items">
                                <img src={item.image} alt="" />
                                <h4>{item.name}</h4>
                            </div>
                            )
                        })
                    }
                    {
                        elec.map((item) => {
                            return (
                                <div>
                                    <img src={item.image} alt="" />
                                    <h4>{item.title}</h4>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>
    )
}

export default AllProducts

