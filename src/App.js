// import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Home} from'./Component/Homepage/Home';
import{Footer}from'./Component/Footer/Footer';
import {Login} from'./Component/Login/Login';
import{Logged}from'./Component/Logged/Logged';
import { Reducer } from './Component/reducer/reducer';
import Cooldrinks from './Component/Cooldrinks/Cooldrinks';
import  Vegetables  from './Component/Vegetables/Vegetables';
import  Fruits  from './Component/Fruits/Fruits';
import Grocery from './Component/Grocery/Grocery';
import Addtocart from './Component/add-to-cart/addtocart';
import Image from './Component/singlecomponent/image';
import Final from './Component/finalpage/final';
import Buy from './Component/proceedtobuy/buy';


import './App.css';

function App() {
  return (
    <Reducer>  
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Home />}></Route>
    <Route path='/Footer' element={<Footer />}></Route>
    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Logged' element={<Logged />}></Route>
    <Route path='/Fruits' element={<Fruits />}></Route>
    <Route path='/Vegetables' element={<Vegetables/>}></Route>
    <Route path='/Vege' element={< Image/>}></Route>
    <Route path='/fru' element={< Image />}></Route>
    <Route path='/cool' element={< Image />}></Route>
    <Route path='/groc' element={< Image />}></Route>
    <Route path='/Cooldrinks' element={<Cooldrinks />}></Route>
    <Route path='/Grocery' element={<Grocery />}></Route>
    <Route path='/Add-to-cart' element={< Addtocart/>}></Route>
    <Route path='/Image' element={< Image />}></Route>
    <Route path='/Final' element={< Final />}></Route>
    <Route path='/Buy' element={< Buy />}></Route>
    

    
    


    </Routes>
    </BrowserRouter>
    </Reducer>

    
  );
}

export default App;
