import Link from 'next/link'
import React from 'react'
import HeaderCss from './Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={HeaderCss.header}>
        <nav className={HeaderCss.nav}>
            <ul className={HeaderCss.navList}>
                <li className={HeaderCss.navItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={HeaderCss.navItem}>
                  <Link href="./About">About me</Link>
                </li>
                <li className={HeaderCss.navItem}>
                  <Link href="./Projects">Projects</Link>
                </li>
                <li className={HeaderCss.navItem}>
                  <Link href="./Contact">Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;
