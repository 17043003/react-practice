import _ from 'lodash'
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component{
  // コンポーネントがマウントされた際、呼び出される
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <Link to={`/events/${event.id}`}>
          <td>{event.title}</td>
        </Link>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render(){

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

// props.value へ state.count.valueを紐付け
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
