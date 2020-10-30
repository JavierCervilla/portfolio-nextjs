import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ data }) => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <header className="custom-header-container">
            <Link className='header-logo' href="/"><img src="/img/logo.png" unsized='true' alt="" /></Link>
            <nav className={`custom-header ${sidebar && 'sidebarActive'}`}>
                {sidebar && <Link style={{ transition: '.4s ease' }} className={`header-logo `} href="/"><img src="/img/logo.png" unsized='true' alt="" /></Link>}
                {data.links.map((el, index) => (
                    <Link key={`header-link-${index}`} href={el.href + data.query} >{el.name}</Link>
                ))}

                <div className="dropdown">
                    <span className="dropdown-title">{location.search === '?lang=es' ? 'Español | ES' : 'English | EN'}</span>
                    <div className="dropdown-content">
                        <a href={location.pathname + '?lang=es'}>ES</a>
                        <a href={location.pathname + '?lang=en'}>EN</a>
                    </div>
                </div>
            </nav>
            <button onClick={() => setSidebar(!sidebar)} className="btn-menu">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
            </button>
            <hr />
        </header >
    )
}

export default Header
