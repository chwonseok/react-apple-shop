import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  console.log(props);
  function alertHandler() {
    return props.dispatch({ type: 'alert' });
  }

  function plusQuantity() {
    return props.dispatch({ type: 'plus' });
  }

  function minusQuantity() {
    return props.dispatch({ type: 'minus' });
  }

  return (
    <>
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
          {props.items.map((cur, i) => {
            return (
              <tr key={i}>
                <td>{cur.id}</td>
                <td>{cur.name}</td>
                <td>{cur.quantity}</td>
                <td>
                  <button onClick={plusQuantity}>+</button>
                  <button onClick={minusQuantity}>-</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alert ? (
        <div>
          <p>It's on sale right now with 20% off!</p>
          <button onClick={alertHandler}>Close</button>
        </div>
      ) : null}
    </>
  );
}

// ⬇️: redux store에 있는 데이터를 가져와서 props로 변환해주는 함수
// 아래의 경우 state는 store에 있는 모든 Data
function stateToProps(state) {
  return {
    items: state.itemReducer,
    alert: state.alertReducer,
  };
}

export default connect(stateToProps)(Cart);
// redux 기능을 사용하기 위해선, 일반적인 export default Cart가 아닌..
// ..위 처럼 해야함
