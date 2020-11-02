import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" 
                />
                <div class="home_row">
                 <Product 
                 id="12358454"
                 title="the learn startup" 
                 price={29.99} 
                 image="https://qefak.com/annonce/tchad/ndjamena/habitfemme/photo/171601971696.jpg" 
                 rating={3}
                 />
                 <Product 
                 id="12354454"
                 title="Des draps 3 places 4 pièces avec des design exceptionnelles." 
                 price={399.99} 
                 image="https://qefak.com/annonce/tchad/ndjamena/decoration/photo/11602929772.jpg" 
                 rating={5}
                 />
                </div>
                <div class="home_row">
                <Product 
                id="123584545"
                 title="💻 Ordinateur portable 14 pouces" 
                 price={599.99} 
                 image="https://qefak.com/annonce/tchad/ndjamena/ordinateur/photo/41602842826.jpg" 
                 rating={5}
                 />
                 <Product 
                 id="12358474"
                 title="Mémoire interne : 32 Go" 
                 price={99.99} 
                 image="https://qefak.com/annonce/tchad/ndjamena/telephone/photo/41602437825.jpg"
                 rating={4}
                 />
                <Product 
                id="12358458"
                 title="Robe Article disponible" 
                 price={39.99} 
                 image="https://qefak.com/annonce/tchad/ndjamena/habitfemme/photo/ImageNews11602399058.jpg" 
                 rating={2}
                 />
                </div>
                <div class="home_row">
                <Product 
                id="12358414"
                 title="Tee-shirts 100% en coton de marque diaspora Tchad avec son drapeau" 
                 price={69.99} 
                 image="https://qefak.com/annonce/tchad/ndjamena/habitfemme/photo/ImageNews11595962457.jpg" 
                 rating={3}
                 />
                </div>
            </div>
        </div>
    )
}

export default Home
