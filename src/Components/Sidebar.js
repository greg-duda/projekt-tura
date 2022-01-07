import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <ul>
                {SidebarData.map((val, key) => {
                    return 
                    <Link >
                        <li key={key}>
                        <div>
                        {val.icon}
                        </div>
                        <div>{val.title}</div>
                        </li>
                        </Link>
                })}
            </ul>
        </div>
    )
}

export default Sidebar
