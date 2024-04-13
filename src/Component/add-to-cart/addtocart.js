import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { decreaseQuantity, removeProduct, updateQuantity } from '../redux/addSlice'


const Addtocart = ({ displayCart, updateQuantity, decreaseQuantity, removeProduct }) => {
    const handleIncrease = (name, amount) => {
        updateQuantity(name, amount);
    };

    const handleDecrease = (name, amount) => {
        decreaseQuantity(name, amount);
    };

    const handleRemove = (name) => {
        removeProduct(name);
    };

    const a = displayCart.length
    console.log(a)

    const navigate3 = useNavigate()
    const handleNavigate3 = () => {
        navigate3(`/Add-to-cart`)
    }

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/Shoes and accessories")
    }
    const navigate1 = useNavigate()
    const handleNavigate_1 = () => {
        navigate1("/Buy")
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
            <div>
                {displayCart.map((item) => (
                    <div key={item.name}>
                        <img  src={item.image} alt='#'></img>
                        <h2 >{item.name}</h2>
                        <h3><span style={{ textDecoration: "line-through" }}>{item.price}</span>{item.discount}<span></span> </h3>
                        <h3>{item.quantity}</h3>
                        <button onClick={() => handleIncrease(item.name, item.amount)}>Increase</button>
                        <button onClick={() => handleDecrease(item.name, item.amount)}>Decrease</button>
                        <button onClick={() => handleRemove(item.name)}>Remove</button>
                    </div>
                ))}
            </div>
            <button onClick={handleNavigate_1}>Proceed To Buy</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        displayCart: state.addtocart.displayCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity: (name, amount) => dispatch(updateQuantity({ name, amount })),
        decreaseQuantity: (name, amount) => dispatch(decreaseQuantity({ name, amount })),
        removeProduct: (name) => dispatch(removeProduct({ name })),
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Addtocart)