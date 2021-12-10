import React from 'react'
import {Link,Route,Routes,BrowserRoute} from 'react-router-dom'


export default function Home() {
    return (
        <div>

<nav>
            
            <Link to="/home">HOME</Link>
            <Link to="/dsu">Daily Status Update</Link>
            <Link to="/task">Task</Link>
            <Link to="/messages">Messsges</Link>
            <Link to="">More</Link>
    
    
             </nav>

            
            <h1>Home Page</h1>
        </div>
    )
}
