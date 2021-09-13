import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

// STEP 1. Redux 세팅 ⬇️
// Provider에 포함된 component는 props 체계없이 state 공유 가능

// STEP 2. state 수정
// ➡️ Redux를 이용한 state 수정 방법!!! Redux에선 state 데이터의 수정방법을 미리 정의해야 함 ⬇️
// reducer는 항상 state를 퉤 뱉어야 함

// STEP 3. reducer(state변경 방식)의 결과(return 값)을 store에 넣어줌

const defaultState = [
  { id: 0, name: 'awesome shoes', quantity: 3, price: 120000 },
  { id: 1, name: 'strong shoes', quantity: 4, price: 80000 },
  { id: 2, name: 'cool shoes', quantity: 1, price: 100000 },
];

function reducer(state = defaultState, action) {
  const newState = [...defaultState];
  if (action.type === 'btnPlus') {
    newState[0].quantity++;
    return newState;
  } else if (action.type === 'btnMinus' && newState[0].quantity > 0) {
    newState[0].quantity--;
    return newState;
  } else {
    return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
