import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { counter } from './index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import Auth from './Auth'
import reducers from './reducers'



const reduxDevtools = window.devToolsExtendion ? window.devToolsExtendion() : f => f

const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools) )
// const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools) )
console.log('store', store.getState())


ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch >
          <Route path="/login" exact component={Auth}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Redirect to="/dashboard"></Redirect>
        </Switch>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)

registerServiceWorker();


