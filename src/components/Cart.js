import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {state.reducerBtn.map((state, i) => {
            return (
              <tr key={i}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.price}</td>
                <td>{state.quantity}</td>
                <td>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={() => {
                      dispatch({ type: 'btnPlus', num: state.id });
                    }}
                  >
                    +
                  </Button>
                  <Button
                    className="ms-1"
                    variant="outline-light"
                    size="sm"
                    onClick={() => {
                      dispatch({ type: 'btnMinus', num: state.id });
                    }}
                  >
                    -
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={() => {
                      dispatch({ type: 'btnRemove', num: state.id });
                    }}
                  >
                    remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {state.reducerAlert ? (
        <div>
          <p>the discount will be ended soon!</p>
          <button
            onClick={() => {
              dispatch({ type: 'alertMsg' });
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

// function storeToProps(store) {
//   return {
//     // state: store.reducerBtn,
//     // alertMsg: store.reducerAlert,
//   };
// }
