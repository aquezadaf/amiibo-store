import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className="App">
      <ProductCard
        picture="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        name="Toon Zelda - The Wind Waker"
        type="Figure"
        price={24000} />
    </div>
  );
}

export default App;
