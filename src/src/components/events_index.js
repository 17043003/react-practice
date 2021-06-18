import _ from 'lodash'
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
 } from 'material-ui/Table'

 import FloatingActionButton from 'material-ui/FloatingActionButton'
 import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions'

class EventsIndex extends Component{
  // コンポーネントがマウントされた際、呼び出される
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <Link to={`/events/${event.id}`}>
          <TableRowColumn>{event.title}</TableRowColumn>
        </Link>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render(){
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12
    }

    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new"></Link>} >
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

// props.value へ state.count.valueを紐付け
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
