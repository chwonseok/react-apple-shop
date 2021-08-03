import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Detail.scss';

export default function Detail({ shoes }) {
  const { id } = useParams();
  const product = shoes.find((cur) => {
    return cur.id === +id;
  });
  const history = useHistory();
  const [warn, setWarn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWarn(false);
    }, 2000);
  });

  function backHandler() {
    history.push('/');
    // history.goBack();
  }

  return (
    <div className="container">
      <div className="label">
        <h2>Detail</h2>
      </div>

      {warn ? (
        <div className="item-alert">
          <p>Almost Being SOLD-OUT Soon!</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>
          <button className="btn btn-danger">Order</button>
          <button className="btn btn-danger" onClick={backHandler}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
