import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
    <div className='topLeft'>
    <i className="topIcon fa-brands fa-square-facebook"></i>
    <i className="topIcon fa-brands fa-square-twitter"></i>
    <i className="topIcon fa-brands fa-square-pinterest"></i>
    <i className="topIcon fa-brands fa-square-instagram"></i>
    </div>
    <div className='topCenter'>
    <ul className='topList'>
       <li className='topListItem'> <Link className='link' to={"/home"}>HOME</Link></li>
       <li className='topListItem'><Link className='link' to={"/about"}>ABOUT</Link></li>
       <li className='topListItem'><Link className='link' to={"/contact"}>CONTACT</Link></li>
       <li className='topListItem'><Link className='link' to={"/write"}>WRITE</Link></li>
       <li className='topListItem'>
       {user && "LOGOUT"}
       </li>
    </ul>
    </div>
    <div className='topRight'>
    {
      user ? (
        <img 
        className='topImg'
       src='https://cdn.pixabay.com/photo/2016/07/10/17/54/kid-1508121_640.jpg'
        alt="" 
        />
      ) : (
        <ul className='topList'>
        <li className='topListItem'>
        <Link className='link' to={"/login"}>LOGIN</Link>
        </li>
        <li className='topListItem'>
        <Link className='link' to={"/register"}>REGISTER</Link>
        </li>
        </ul>
      )
    }
    
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
    </div>
  )
}
