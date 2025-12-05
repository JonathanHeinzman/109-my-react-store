
import { useContext } from 'react'
import GlobalContext from '../state/globalContext'
import { Link } from 'react-router-dom'

import { IconShoppingCart } from '@tabler/icons-react';
import { IconMusic } from '@tabler/icons-react';

//import "./Navbar.css";

function Navbar() {
    const user = useContext(GlobalContext).user
    const cart = useContext(GlobalContext).cart

    function getTotalItems() {
        let sum = 0;

        for(let i=0; i<cart.length; i++){
            sum = sum + cart[i].quantity
        }

        return sum
    }

    return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
        <div className="container-fluid">
            <div className="navbar-brand">
                <h1>My Music Store <IconMusic size={50} stroke={2} /></h1>
            </div>
            <div className="navbar-menu d-flex justify-between">
                <ul className="navbar-nav">
                    <li className="nav-item" >
                        <Link to ={"/"} className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/catalog"} className="nav-link">Catalog</Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/about"} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/admin"} className="nav-link">Admin</Link>
                    </li>
                </ul>
                <div className='d-flex align-items-center gap-2'>
                    <div className="text-white">{user.name}</div>
                    <div className="text-white">
                        <Link to={"/cart"} className='btn btn-dark'>
                            <IconShoppingCart stroke={2} />{getTotalItems()}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar