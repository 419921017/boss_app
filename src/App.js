import React from 'react'
import {Button, List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render() {
    const boss = '李云荣';
    const firstLeader = '张大喵'
    const secondLeader = '张二喵'
    return (
      <div>
        <h2>独立团, 团长{boss}</h2>
        <FirstTeam leader={firstLeader}></FirstTeam>
        <SecondTeam leader={secondLeader}></SecondTeam>
      </div>
    )
  }
}

function SecondTeam(props) {
  return <h2>骑兵连, 老大{props.leader}</h2>
}

class FirstTeam extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      solders: ['aaa', 'bbb', 'ccc']
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  componentWillMount() {
    console.log('组件将要加载')
  }
  componentDidMount() {
    console.log('组件已经加载')
  }
  addSolder = () => {
    console.log('addSolder')
    this.setState({
      solders: [...this.state.solders, 'new solder ' + Math.random()]
    })
  }
  render() {
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长, {this.props.leader}</h2>
        <Button type="primary" onClick={this.addSolder}>button</Button>
        <List renderHeader={ () => 'solder list'}>
          {this.state.solders.map((v, i)=> {
            return <List.Item key={i}>{v}</List.Item>
          })}
        </List>
      </div>
    )
  }
}

export default App