import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
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
        <tr>
          <td>{props.state[0].name}</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
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
