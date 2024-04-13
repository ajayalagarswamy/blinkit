import { useContext, useEffect, useState } from "react"
import { TiShoppingCart } from "react-icons/ti";

import { useNavigate } from "react-router-dom"
import { context } from '../reducer/reducer'

const Grocery = () => {
    const { state, dispatch } = useContext(context)
    const [grocery, setGrocery] = useState([])
    // console.log(shoes)
    useEffect(() => {
        const groc = state.List.filter((a) => {
            return a.product === "grocery"
        })
        setGrocery(groc)
        // console.log(Shoes)
    }, [])
    const navigate = useNavigate()
    const handleNavigate = (grocery) => {
        navigate(`/groc/?id=${grocery.name}`)
    }
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
            <nav>
                <ul>
                    <li><a href="#">Vegetables & Fruits</a></li>
                    <li><a href="#">Dairy & Breakfast</a></li>
                    <li><a href="#">Munchies</a></li>
                    <li><a href="#">Cold Drinks & Juices</a></li>
                    <li><a href="#">Instant & Frozen Food</a></li>
                    <li><a href="#">Tea, Coffee & Health Drinks</a></li>
                    <li><a href="#">Bakery & Biscuits</a></li>
                    <li><a href="#">More</a></li>
                </ul>
            </nav>
            <div className='banner'>
                <img src='https://radheonline.com.au/wp-content/uploads/slider1/ro-site-banner-3.jpeg' alt='#' />
                <h1 className='txt'>Grocery</h1>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {grocery.map((a) => (
                    <div style={{ width: "23%", margin: "10px" }}>
                        <img style={{ height: "300px", width: "300px" }} src={a.image} onClick={() => handleNavigate(a)} alt='img'></img>
                        <h3 style={{ marginLeft: "20px" }}>{a.name}</h3>
                        <h3 style={{ marginLeft: "20px" }}><span style={{ textDecoration: "line-through" }}>{a.price}</span>{a.discount}<span></span> </h3>
                        <h3 style={{ marginLeft: "20px" }}>{a.quantity}</h3>

                    </div>


                ))}
            </div>
        </div>
    )
}
export default Grocery