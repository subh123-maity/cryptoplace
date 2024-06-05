import React,{useContext} from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'
import  arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {setCurrency}=useContext(CoinContext);

  const currencyHandler=(event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd",symbol:"$"})
        break;
      }
      case "eur":{
        setCurrency({name:"eur",symbol:"@"})
        break;
      }
      case "inr":{
        setCurrency({name:"inr",symbol:"*"})
        break;
      }
    default:{
        setCurrency({name:"usd",symbol:"$"})
        break;
      }
    }

  }


  return (
    <div className='navbar'>
      {/* //yaha pe link dalne ka reason ha ki jase hi hum home pe ya to logo pe click karenge hum wapas home page pe ajaenge */}
      <Link to={'/'}> 
        <img src={logo} alt="" className='logo' />
        </Link>
        <ul>
        <Link to={'/'}>

            <li>Home</li>
            </Link>

            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>

        </ul>
        <div className="nav-right">
          <select onChange={currencyHandler}>
\                <option value="usd">usd</option>
                <option value="eur">eur</option>
                <option value="inr">inr</option>

            </select>
            <button>Sign Up <img src={arrow_icon} alt=''/></button>
        </div>


      
    </div>
  )
}

export default Navbar
