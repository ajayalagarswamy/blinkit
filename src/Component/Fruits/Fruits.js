import { useContext, useEffect, useState } from "react"
import { TiShoppingCart } from "react-icons/ti";

import { useNavigate } from "react-router-dom"
import { context } from '../reducer/reducer'

const Fruits = () => {
    const { state, dispatch } = useContext(context)
    const [fruits, setFruits] = useState([])
    // console.log(shoes)
    useEffect(() => {
        const fru = state.List.filter((a) => {
            return a.product === "fruits"
        })
        setFruits(fru)
        // console.log(Shoes)
    }, [state.List])
    const navigate = useNavigate()
    const handleNavigate = (fruits) => {
        navigate(`/fru/?id=${fruits.name}`)
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
                <img src='https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg' alt='#' />
                <h1 className='txt'>Fruits</h1>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {fruits.map((a) => (
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
export default Fruits