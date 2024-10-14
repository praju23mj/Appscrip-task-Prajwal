import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <>
    <Head>Product Listening</Head>

    <header>
    <div className={styles.border}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link href="/">
                    <Image src='/images/logo.png' alt='Logo' width={30} height={30}/>
                    </Link>
                </div>
                <div className={styles.heading}> <h1>LOGO</h1></div>
                <div className={styles.icons}>
                <Image src="/images/search-normal.png" alt="Search" width={20} height={20} />
                <Image src="/images/heart.png" alt="heart" width={20} height={20} />
                <Image src="/images/shopping-bag.png" alt="wishlist" width={20} height={20} />
                <Image src="/images/profile.png" alt="User" width={20} height={20} />
                <select className={styles.langu}>
                    <option value="ENG">ENG</option>
                    <option value="ENG">FR</option>
                    <option value="ENG">HIN</option>
                </select>
                </div>
            </div>
            <div className={styles.navb}>
                <nav className={styles.nav}>
                <ul>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/stories">Stories</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
                </nav>
                </div>
        </div>
    </div>
    </header>
    <hr className={styles.customHr}/>
    </>
  )
}

export default Header