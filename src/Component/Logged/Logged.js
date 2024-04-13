import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { Footer } from '../Footer/Footer'
import './Logged.css'

export const Logged = () => {
    const navigate3 = useNavigate()
    const handleNavigate3 = () => {
        navigate3("/Addtocart")
    }
    return (
        <div >
            <header className='Home'>
                <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' className='Tlogo' alt='#' />
                <div className='location'>
                    <h3>Fastest delivery </h3>
                </div>

                <input type='text' className='search' placeholder='What are you looking for...'></input>
                <button className='logbtn'>login</button>
                <div className='container2'>
                    <button onClick={handleNavigate3} className='cart'><TiShoppingCart />Cart</button></div>
            </header>
            <div className='banner'>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" className='banner' alt='#' />
                <h1 className='para1'>The leading online shopping  enables you to order grocery, fruits & vegetables, and other daily essential products, directly via your mobile or web browse </h1><br></br>
                <p className='para2'>Discover new and trending products</p><br></br><br></br><br></br>
            </div>
            <div className='Link'>
                <Link to={'/Vegetables'} className='text'><img src="https://www.bhg.com/thmb/cX9GeFKdow2d4mNqEbMRTXjpoZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg" className='veg' alt='#' /> Vegetables</Link>
                <Link to={'/Fruits'} className='text'><img src="https://www.euroschoolindia.com/wp-content/uploads/2023/10/importance-of-eating-a-variety-of-fruits-for-kids-health-jpg.webp" className='fruit' alt='#' /> Fruits</Link>
                <Link to={'/Grocery'} className='text'><img src="https://hips.hearstapps.com/hmg-prod/images/hungryroot-1658507018.png?crop=0.6133671742808798xw:1xh;center,top&resize=980:*" className='grocery' alt='#' />Grocery</Link>
                <Link to={'/Cooldrinks'} className='text'><img src="https://qph.cf2.quoracdn.net/main-qimg-7347f0e447721802029f84a799a925d7-lq" className='cool' alt='#' />Cool_drinks</Link>

            </div>

            <Footer />

        </div>

    )
}

export default Logged