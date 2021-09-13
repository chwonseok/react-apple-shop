import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>More/Less</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((state, i) => {
            return (
              <tr key={i}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.price}</td>
                <td>{state.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: 'btnPlus' });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: 'btnMinus' });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertMsg ? (
        <div>
          <p>the discount will be ended soon!</p>
          <button
            onClick={() => {
              props.dispatch({ type: 'alertMsg' });
            }}
            className="btn btn-danger"
          >
            close
          </button>
        </div>
      ) : null}
    </>
  );
}

function storeToProps(store) {
  return {
    state: store.reducerBtn,
    alertMsg: store.reducerAlert,
  };
}

export default connect(storeToProps)(Cart);
