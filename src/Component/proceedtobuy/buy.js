import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";


const Buy = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/final')
    }
    return (
        <div>
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
                <p>Total Amount : { }</p>
                <button style={{marginLeft:"650px"}}>Card Payment</button> <button>UPI</button> <button>Cash On Delivery</button><br></br>
                <button style={{ marginLeft: "750px" }} onClick={handleNavigate}>PAY</button>
            </div>
        </div>
    )
}

export default Buy