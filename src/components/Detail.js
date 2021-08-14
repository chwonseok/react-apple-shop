import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Detail.scss';
import Stock from './Stock';
import TabContent from './TabContent';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

function Detail(props) {
  const { id } = useParams();
  const product = props.shoes.find((cur) => {
    return cur.id === +id;
  });
  const history = useHistory();
  const [alert, setAlert] = useState(true);
  const [tab, setTab] = useState(0);
  const [tabStyle, setTabStyle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      // bug 방지할 수 있는 안전장치 from ex: timer가 다 가기 전에 페이지 변경하는 등의 경우
      clearTimeout(timer);
    };
  }, []);

  function orderHandler() {
    props.setStock([9, 10, 11]);
    props.dispatch({
      type: 'addItem',
      payload: { id: 2, name: 'new shoes', quantity: 1 },
    });
    history.push('/cart');
  }

  function backHandler() {
    history.push('/');
    // history.goBack(); 이 코드도 같은 용도로 사용할 수 있음
  }

  return (
    <div className="container">
      <div className="label">
        <h2>Detail</h2>
      </div>

      {alert ? (
        <div className="item-alert">
          <p>Almost Being SOLD-OUT Soon!</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${+id + 1}.jpg`}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}</p>

          <Stock stock={props.stock} />

          <button className="btn btn-danger" onClick={orderHandler}>
            Order
          </button>
          <button className="btn btn-danger" onClick={backHandler}>
            Go back
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTabStyle(false);
              setTab(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTabStyle(false);
              setTab(1);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setTabStyle(false);
              setTab(2);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={tabStyle} classNames="wow" timeout={500}>
        <TabContent tab={tab} setTabStyle={setTabStyle} />
      </CSSTransition>
    </div>
  );
}

function stateToProps(state) {
  console.log(state);
  return {
    items: state.itemReducer,
    alert: state.alertReducer,
  };
}

export default connect(stateToProps)(Detail);
