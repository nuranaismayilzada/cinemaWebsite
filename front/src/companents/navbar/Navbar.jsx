import React from 'react'
import "./navbar.scss"
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='navbarSection'>
      <div className="container">
        <div className="navbar">
            <div className="left-side">
            <BiSolidCameraMovie className='movieIcon'/>
            </div>
            <div className="right-side">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li className='myTickets'>My tickets
                            <span className='count'>3</span>
                        </li>
                        <li>Contact</li>
                        <li>
                        <RiSearchLine className='search' />
                        </li>
                        <li>
                        <FaUserAlt className='user' />
                        </li>
                        <li>
                        <GiHamburgerMenu className='burgerMenu' />
                        </li>
                        <li>
                        <CiHeart className='heart' />
                        </li>
                        <li>
                            <button class="glow-on-hover" type="button">Sign In</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
