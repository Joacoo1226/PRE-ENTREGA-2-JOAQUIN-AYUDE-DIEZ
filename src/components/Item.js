// src/components/Item.js
import { Link } from 'react-router-dom';

const Item = ({ id, name, price }) => {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
