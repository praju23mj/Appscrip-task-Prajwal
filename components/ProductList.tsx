// import React,{useState} from 'react'
// import styles from "../styles/productList.module.css";
// import Filter from './Filter';



// const ProductList = () => {
//     const [isFilterVisible, setIsFilterVisible] = useState(true); // State to manage filter visibility
  
//     const toggleFilterVisibility = () => {
//       setIsFilterVisible(prev => !prev); // Toggle the visibility
//     };


// const ProductList = () => {
//   return (
//     <>
//     <div className={styles.maincontainer}>
//         <div className={styles.hero}>
//             <div className={styles.head}><h1>DISCOVER OUR PRODUCTS</h1></div>
//             <div className={styles.para}><p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/> 
//             scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p></div>
//         </div>
//         <div className={styles.filter}>
//             <div className={styles.num}>3425 ITEMS</div>
//             <div className={styles.hide} onClick={toggleFilterVisibility}><p>&#60;<u className={styles.under}> {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"} </u></p></div>
//             <select className={styles.select}>
//                 <option>RECOMMENDED</option>
//                 <option>NEWEST FIRST</option>
//                 <option>POPULAR</option>
//                 <option>PRICE: HIGH TO LOW</option>
//                 <option>PRICE:LOW TO HIGH</option>
//             </select>
//         </div>
//         {isFilterVisible && <Filter products={[]} />} {/* Pass the visibility state to Filter */}
//     </div>
//     </>
//   )
// }

// export default ProductList;

"use client";

import React, { useState } from 'react';
import styles from "../styles/productList.module.css";



const ProductList = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true); // State to manage filter visibility

  const toggleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev); // Toggle the visibility
  };

  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.hero}>
          <div className={styles.head}>
            <h1>DISCOVER OUR PRODUCTS</h1>
          </div>
          <div className={styles.para}>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br />
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
        </div>

        <div className={styles.filter}>
          <div className={styles.num}>3425 ITEMS</div>
          <div className={styles.hide} onClick={toggleFilterVisibility}> {/* Toggle visibility on click */}
            <p>&#60;<u className={styles.under}> {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"} </u></p>
          </div>
          <select className={styles.select}>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ProductList;
