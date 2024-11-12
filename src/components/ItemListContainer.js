// src/components/ItemListContainer.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const mockProducts = [
  { id: 1, name: 'Iphone 15', category: 'celulares', price: 500 },
  { id: 2, name: 'Procesador Ryzen 7', category: 'procesadores', price: 300 },
  { id: 3, name: 'Placa RTX 3060', category: 'placas', price: 500 },
];

const ItemListContainer = ({ title }) => { 
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = categoryId
      ? mockProducts.filter(product => product.category === categoryId)
      : mockProducts;
    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div className="product-list">
      <h2>{title}</h2> {}
      {products.map(product => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
