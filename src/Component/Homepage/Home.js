import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Footer/Footer';
import './Home.css'

export const Home = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>
        navigate("/Login")

    return (
        <div >
            <header className='Home'>
                <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' className='Tlogo' alt='#' />
                <div className='location'>
                <h3>Fastest delivery </h3>
                </div>

                <input type='text' className='search' placeholder='What are you looking for...'></input>
                <button className='logbtn' onClick={handleNavigate}>login</button>
                <div className='container2'>
                    <button className='cart'><TiShoppingCart />Cart</button></div>
            </header>
            <div className='banner'>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" className='banner' alt='#' />
                <h1 className='para1'>The leading online shopping  enables you to order grocery, fruits & vegetables, and other daily essential products, directly via your mobile or web browse </h1><br></br>
                <p className='para2'>Discover new and trending products</p><br></br><br></br><br></br>
                <Footer />

            </div>
        </div>

    )
}