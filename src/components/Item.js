import { useHistory } from 'react-router';

export default function Item({ data }) {
  const history = useHistory();

  function itemClickHandler() {
    const lsData = JSON.parse(localStorage.getItem('shoes'));

    if (!lsData) {
      localStorage.setItem('shoes', JSON.stringify([data.id]));
    } else {
      const preData = JSON.parse(localStorage.getItem('shoes'));
      const condition = preData.find((el) => el === data.id);
      if (condition) {
        // 같은 게 있을 때
        return preData;
      } else {
        // 같은 게 없을 때
        preData.push(data.id);
        localStorage.setItem('shoes', JSON.stringify(preData));
      }
    }
    // JSON.stringify([data.id]);
    // console.log(JSON.parse(localStorage.getItem('shoes')));

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
