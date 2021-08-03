import './Items.css';
import Data from '../db/data';
import Item from './Item';
import { useState } from 'react';

export default function Items() {
  const [shoes, setShoes] = useState(Data);

  return (
    <div className="container">
      <div className="row">
        {shoes.map((item, i) => {
          return <Item key={i} datas={item} />;
        })}
      </div>
    </div>
  );
}
