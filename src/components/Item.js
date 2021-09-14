import { useHistory } from 'react-router';

export default function Item({ data }) {
  const history = useHistory();
  function itemClickHandler() {
    history.push(`/detail/${data.id}`);
  }

  return (
    <div className="col-md-4" onClick={itemClickHandler}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`}
        width="100%"
        alt="shoes"
      />
      <h4>{data.title}</h4>
      <p>
        {data.content}, {data.price}
      </p>
    </div>
  );
}
