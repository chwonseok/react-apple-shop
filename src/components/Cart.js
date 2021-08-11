import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  console.log(props.state);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {props.state.map((cur, i) => {
          return (
            <tr key={i}>
              <td>{cur.id}</td>
              <td>{cur.name}</td>
              <td>{cur.quantity}</td>
              <td>null</td>
            </tr>
          );
        })}
        {/* <tr>
          <td>{props.state[0].name}</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

// ⬇️: redux store에 있는 데이터를 가져와서 props로 변환해주는 함수
function funcName(state) {
  return {
    state: state,
  };
}

export default connect(funcName)(Cart);
// export default Cart <-- 이렇게 처리해줘야 함!
