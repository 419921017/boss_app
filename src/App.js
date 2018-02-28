import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

import { add, reduce, async } from './redux/index.redux'

// const mapStatetoProps = (state) => {
//   return {num: state}
// }
// const actionCreators = { add, reduce, async }

// App = connect(mapStatetoProps, actionCreators)(App)

@connect(
  // state的属性放进props
  state => ({num: state}),
  // state的方法放进props
  { add, reduce, async }
)
class App extends React.Component{
  render() {
      return (<div>
        <div>现在有机枪{this.props.num}把</div>
        <Button onClick={() => this.props.add()}>申请武器</Button>
        <Button onClick={() => this.props.reduce()}>缩减武器</Button>
        <Button onClick={() => this.props.async(add)}>缓两天</Button>
      </div>
    )
  }
}

// function SecondTeam(props) {
//   return <h2>骑兵连, 老大{props.leader}</h2>
// }

// class FirstTeam extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       solders: ['aaa', 'bbb', 'ccc']
//     }
//     // this.addSolder = this.addSolder.bind(this)
//   }
//   componentWillMount() {
//     console.log('组件将要加载')
//   }
//   componentDidMount() {
//     console.log('组件已经加载')
//   }
//   addSolder = () => {
//     console.log('addSolder')
//     this.setState({
//       solders: [...this.state.solders, 'new solder ' + Math.random()]
//     })
//   }
//   render() {
//     console.log('组件正在加载')
//     return (
//       <div>
//         <h2>一营营长, {this.props.leader}</h2>
//         <Button type="primary" onClick={this.addSolder}>button</Button>
//         <List renderHeader={ () => 'solder list'}>
//           {this.state.solders.map((v, i)=> {
//             return <List.Item key={i}>{v}</List.Item>
//           })}
//         </List>
//       </div>
//     )
//   }
// }

export default App