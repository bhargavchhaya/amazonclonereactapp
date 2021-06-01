import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return(
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/SAPF/1500x600_Hero-Tall_JPN._CB668283308_.jpg" alt="Banner"/>

            <div className="home__row">
                <Product 
                    id="1"
                    title = "Title for the Product"
                    price={11.86}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="2"
                    title = "Title for the Product 2"
                    price={40.86}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="3"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="4"
                    title = "Title for the Product"
                    price={11.86}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="5"
                    title = "Title for the Product 2"
                    price={40.86}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="6"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="7"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="8"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="9"
                    title = "Title for the Product 2"
                    price={40.86}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="10"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="11"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product 
                    id="12"
                    title = "Title for the Product 3"
                    price={93.86}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;