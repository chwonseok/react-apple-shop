import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Detail.scss';

export default function Detail({ shoes }) {
  const { id } = useParams();
  const product = shoes.find((cur) => {
    return cur.id === +id;
  });
  const history = useHistory();
  const [alert, setAlert] = useState(true);
  const [test, setTest] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(timer);
    return () => {
      clearTimeout(timer); // bug 방지할 수 있는 안전장치 from ex: timer가 다 가기 전에 페이지 변경하는 등의 경우
    };
  }, []);

  function testHandler(e) {
    setTest(e.target.value);
  }

  function backHandler() {
    history.push('/');
    // history.goBack();
  }

  return (
    <div className="container">
      <div className="label">
        <h2>Detail</h2>
      </div>

      {test}
      <input onChange={testHandler} />

      {alert ? (
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
