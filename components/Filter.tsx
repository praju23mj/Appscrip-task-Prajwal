import React from 'react';
import styles from "../styles/filter.module.css";
import Image from 'next/image';

// Define the type for a product
interface Product {
  id: number;
  title: string;
  image: string;
}


  
const Filter = ({ products }: { products: Product[] }) => { 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.check}>
            <input type='checkbox' value='yes' id='customizable' />
            <label className={styles.cust}> Customizable</label>
          </div>

          <select className={styles.col}>
            <option className={styles.option}>IDEAL FOR </option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>OCCASION</option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>WORK</option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>FABRIC</option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>SEGMENT</option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>SUITABLE FOR</option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>ROW MATERIALS</option>
          </select>
          <p className={styles.all}>ALL</p>

          <select className={styles.col}>
            <option className={styles.option}>PATTERNS</option>
          </select>
          <p className={styles.all}>ALL</p>
        </div>
        <div className={styles.box2}>
          <div className={styles.productGrid}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className={styles.productItem}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150} // Adjust width as needed
                  height={200} // Adjust height as needed
                  className={styles.productImage}
                />
                <h3 className={styles.productTitle}>{product.title}</h3>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
