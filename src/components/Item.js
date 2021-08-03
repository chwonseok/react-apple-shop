export default function Item({ datas }) {
  return (
    <>
      <div className="col-md-4">
        <img
          src={`https://codingapple1.github.io/shop/shoes${datas.id + 1}.jpg`}
          width="100%"
          alt="shoes"
        />
        <h4>{datas.title}</h4>
        <p>
          {datas.content}, {datas.price}
        </p>
      </div>
    </>
  );
}
