import React, {Component} from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class EventsIndex extends Component{
  // コンポーネントがマウントされた際、呼び出される
  componentDidMount(){
    this.props.readEvents()
  }

  render(){
    const props = this.props

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// props.value へ state.count.valueを紐付け
const mapStateToProps = state => ({})

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
