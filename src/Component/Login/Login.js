import React from 'react';
import { useForm } from 'react-hook-form';
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Login = () => {
const { register, handleSubmit, formState: { errors } } = useForm();

const usersData = [
    { username: 'Ajay', password: '1234567' },
    { username: 'Pavithran', password: '1234568' },
    { username: 'taswa', password: '1234569' }
];

const onSubmit = (data) => {
const user = usersData.find(
(user) => user.username === data.username && user.password === data.password
    );

        if (user) {
            navigate("/Logged")
        } else {
            alert("Invalid Credentials")
        }
    };
    const navigate = useNavigate()

    return (
        <div>
            <header className='Home'>
                <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' className='Tlogo' alt='#' />
                <div className='location'>
                    <h3>Fastest delivery </h3>
                </div>

                <input type='text' className='search' placeholder='What are you looking for...'></input>
                <button className='logbtn'>login</button>
                <div className='container2'>
                    <button className='cart'><TiShoppingCart />Cart</button></div>
            </header>
            <div className='log'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Username : </label>
                        <input {...register('username', { required: 'Username is required' })} />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                    <div>
                        <label>Password : </label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
