import React from 'react'
import SearchBar from '../Search Bar/SearchBar.jsx'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'


function Nav (props) {
    return (
        <nav>
            <Link to ='/home' className={styles.searchBarButtonHyA}>Home</Link>
            <Link to ='/about' className={styles.searchBarButtonHyA}>About</Link>
            <button className={styles.searchBarButtonHyA} onClick={props.logout}>Logout</button>
            <Link to = '/favorites' className={styles.searchBarButtonHyA}>Favorites</Link>
            <SearchBar onSearch = {props.onSearch} random={props.random} />
        </nav>    
    )
};
export default Nav


// const Nav = ({onSearch})=>{
//     return (
//             <div>
//                 <nav>
//                     <SearchBar onSearch = {onSearch} />
//                 </nav>
//             </div>
//             )
//     };  
