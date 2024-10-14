import React from 'react'
import styles from "../styles/footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
  <>
 
<footer className={styles.footer}>
      <div className={styles.containers}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettà muse.</p>
          <div className={styles.emailSignup}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <div className={styles.symbol}>
          <Image src="/images/usa.png" alt='usa' width={25} height={25}/>
          <p> &nbsp; &#9670; USD</p>
          </div>
          <small className={styles.small}>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>

        <hr className={styles.line}/>
        <div className={styles.links}>
        <h3>mettà muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles.quickLinks}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        
        <div className={styles.media}>
            <h3>FOLLOW US</h3>
            <div className={styles.social}>
                <Image src='/images/insta.png' alt='instagram' width={25} height={25}/>
                <Image src='/images/a.png' alt='instagram' width={25} height={25}/>
            </div>
            <h3>mettà muse ACCEPTS</h3>
            <div className={styles.paymenticons}>
            <Image src='/images/gpay.png' alt='gpay' width={45} height={25}/>
            <Image src='/images/master.png' alt='master' width={45} height={25}/>
            <Image src='/images/pay.png' alt='paypal' width={45} height={25}/>
            <Image src='/images/amex.png' alt='amex' width={45} height={25}/>
            <Image src='/images/apple.png' alt='apple' width={45} height={25}/>
            <Image src='/images/opay.png' alt='opay' width={45} height={25}/>
            </div>
        </div>
        </div> 
</footer>      
  </>
  )
}

export default Footer