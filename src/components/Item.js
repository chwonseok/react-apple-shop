import { useHistory } from 'react-router';

export default function Item({ data }) {
  const history = useHistory();

  function itemClickHandler() {
    history.push(`/detail/${data.id}`);

    const lsData = localStorage.getItem('shoes');

    if (!lsData) {
      localStorage.setItem('shoes', JSON.stringify([data.id]));
    } else {
      let lsArr = JSON.parse(lsData);
      lsArr.push(data.id);
      lsArr = new Set(lsArr);
      lsArr = [...lsArr];
      localStorage.setItem('shoes', JSON.stringify(lsArr));
    }
    console.log(lsData);
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
