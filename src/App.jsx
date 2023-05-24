import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/MainContent/ProductList'
import { Footer } from './components/Footer/Footer';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://voodoo-sandbox.myshopify.com/products.json?limit=12');
    setProducts(response.data?.products)
    }
    
    fetchData();
  }, [])
  
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <ProductList products={products}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;