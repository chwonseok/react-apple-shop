import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// STEP 1. Redux 세팅 ⬇️
// Provider에 포함된 component는 props 체계없이 state 공유 가능
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultState = [
  { id: 0, name: 'nice shoes', quantity: 2 },
  { id: 1, name: 'cool shoes', quantity: 5 },
];
const store = createStore(reducer);
// STEP 2. state 수정
// ➡️ Redux를 이용한 state 수정 방법!!! Redux에선 state 데이터의 수정방법을 미리 정의해야 함 ⬇️
// reducer는 항상 state를 퉤 뱉어야 함
function reducer(state = defaultState, action) {
  if (action.type === 'plus') {
    const modifiedState = [...state];
    modifiedState[0].quantity++;

    return modifiedState;
  } else {
    return state;
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
