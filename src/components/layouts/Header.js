import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
            <Link style = {linkStyle} to="/">Home </Link> | 
            <Link style = {linkStyle} to="/about"> About</Link>
        </header> 
    )
}

const headerStyle = {
    background: '#008000',
    color: '#fff',
    textAlign: 'center',
    padding: '50px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
