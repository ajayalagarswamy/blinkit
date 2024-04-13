import React from 'react'
import { TiShoppingCart } from "react-icons/ti";


const Final = () => {
    return (
       
        
        <div>
            <header className='Home'>
                <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' alt='#' className='Tlogo' />
                <div className='location'>
                    <h3>Fastest delivery </h3>
                </div>

                <input type='text' className='search' placeholder='What are you looking for...'></input>
                <button className='logbtn'>login</button>
                <div className='container2'>
                    <button className='cart'><TiShoppingCart />Cart</button>
                </div>
            </header>
        <p>Your Order Has Been Placed And Will Deliver In Appropriate Time</p>
        </div>
    )
}

export default Final                                                                                                                                  