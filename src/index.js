import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { counter } from './redux/index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
const reduxDevtools = window.devToolsExtendion ? window.devToolsExtendion() : f => f

const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools) )

function render() {
  ReactDOM.render(
    (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ),
    document.getElementById('root')
  )
}

render()
registerServiceWorker();

store.subscribe(render)
