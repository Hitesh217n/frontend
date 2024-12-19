import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import mensClothingImg from './assets/imagessrc/imagea.jpg'; // Import the men's clothing image
import womenClothingImg from './assets/imagessrc/imagewomen.jpg'; // Import the women's clothing image
import childClothingImg from './assets/imagessrc/imagechild.jpg'; // Import the children's clothing image

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <head>
        <title>hi</title>
      </head>
      <header>
        <div className="container">
          <h1>BharatWear</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="category">
          <h2>Men's Clothing</h2>
          <p>Explore our collection of traditional men's clothing.</p>
          <div className="item-container">
            <img
              src={mensClothingImg}
              alt="Men's Clothing"
              className="category-image"
            />
            <p className="item-cost">$50</p>
          </div>
          <button className="view-all">View More</button>
        </section>
        <section className="category">
          <h2>Women's Clothing</h2>
          <p>Discover a wide range of traditional women's wear.</p>
          <div className="item-container">
            <img
              src={womenClothingImg}
              alt="Women's Clothing"
              className="category-image"
            />
            <p className="item-cost">$60</p>
          </div>
          <button className="view-all">View More</button>
        </section>
        <section className="category">
          <h2>Children's Clothing</h2>
          <p>Find charming traditional clothing for kids.</p>
          <div className="item-container">
            <img
              src={childClothingImg}
              alt="Children's Clothing"
              className="category-image"
            />
            <p className="item-cost">$30</p>
          </div>
          <button className="view-all">View More</button>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 BharatWear..</p>
        </div>
      </footer>
    </>
  );
}

export default App;
