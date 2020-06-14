import React from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid'

const sampleProducts = []

for (let i = 0; i < 10; i++) {
  sampleProducts.push({
    picture: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png",
    name: "Toon Zelda - The Wind Waker",
    type: "Figure",
    price: 24000
  })
}

function App() {
  return (
    <div className="App">
      <ProductGrid products={sampleProducts} />
    </div>
  );
}

export default App;
