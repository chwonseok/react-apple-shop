import './Items.css';
import Item from './Item';

export default function Items({ shoes }) {
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
