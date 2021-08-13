import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// STEP 1. Redux 세팅 ⬇️
// Provider에 포함된 component는 props 체계없이 state 공유 가능
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const alertState = true;

function alertReducer(state = alertState, action) {
  if (action.type === 'alert') {
    state = false;
    return state;
  } else {
    return state;
  }
}

const itemState = [
  { id: 0, name: 'nice shoes', quantity: 2 },
  { id: 1, name: 'cool shoes', quantity: 5 },
];

// STEP 2. state 수정
// ➡️ Redux를 이용한 state 수정 방법!!! Redux에선 state 데이터의 수정방법을 미리 정의해야 함 ⬇️
// reducer는 항상 state를 퉤 뱉어야 함
function itemReducer(state = itemState, action) {
  if (action.type === 'addItem') {
    const copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === 'plus') {
    const copy = [...state];
    copy[0].quantity++;

    return copy;
  } else if (action.type === 'minus') {
    const copy = [...state];

    copy[0].quantity--;
    if (copy[0].quantity < 0) copy[0].quantity = 0;

    return copy;
  } else {
    return state;
  }
}

// STEP 3. reducer(state변경 방식)의 결과(return 값)을 store에 넣어줌
const store = createStore(combineReducers({ itemReducer, alertReducer }));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
