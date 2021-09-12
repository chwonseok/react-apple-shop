import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

// { state } : props.state의 간략한 형태
function Cart({ state }) {
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {state.map((state, i) => {
            return (
              <tr key={i}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.quantity}</td>
                <td>{state.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

function storeToProps(state) {
  return {
    state: state,
  };
}

export default connect(storeToProps)(Cart);
