export default function Item({ data }) {
  return (
    <>
      <div className="col-md-4">
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
    </>
  );
}
