import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

import { add, reduce, async } from './index.redux'

// const mapStatetoProps = (state) => {
//   return {num: state}
// }
// const actionCreators = { add, reduce, async }

// App = connect(mapStatetoProps, actionCreators)(App)

@connect(
  // state的属性放进props
  state => ({num: state.counter}),
  // state的方法放进props
  { add, reduce, async }
)
class App extends React.Component{
  render() {
    return (
      <div>
        <div>现在有机枪{this.props.num}把</div>
        <Button onClick={() => this.props.add()}>申请武器</Button>
        <Button onClick={() => this.props.reduce()}>缩减武器</Button>
        <Button onClick={() => this.props.async(add)}>缓两天</Button>
      </div>
    )
  }
}

export default App