import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Redux 세팅 ⬇️
// Provider에 포함된 component는 props 체계없이 state 공유 가능
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const store = createStore(() => {
  return [{ id: 0, name: 'nice shoes', quantity: 2 }];
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
