// src/components/ItemDetailContainer.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: 'IPHONE 15', category: 'celulares', price: 80, description: 'El iPhone 15 cuenta con memoria RAM de alta velocidad, asegurando un rendimiento fluido en aplicaciones exigentes y una experiencia multitarea sin interrupciones.' },
  { id: 2, name: 'Procesador Ryzen 9', category: 'procesadores', price: 300, description: 'Procesador potente para gaming y trabajo.' },
  { id: 3, name: 'Placa RTX 3060ti', category: 'placas', price: 500, description: 'La NVIDIA GeForce RTX 3060 Ti es una tarjeta gráfica de gama media-alta basada en la arquitectura Ampere. Ofrece un excelente rendimiento en juegos 1080p y 1440p, con soporte para ray tracing y DLSS (Deep Learning Super Sampling). Está equipada con 8 GB de memoria GDDR6, lo que la convierte en una opción popular para jugadores y creadores de contenido que buscan una experiencia de alto rendimiento sin el precio de las tarjetas más caras.' },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setError(null);
    } else {
      setError('Producto no encontrado.');
    }
    setLoading(false);
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
