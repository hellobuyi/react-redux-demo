import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { decComments, addComments } from '../reducers/index'
export class CommentBts extends Component {
  static propTypes = {
    addComments:PropTypes.func,
    decComments:PropTypes.func
  }
  handleadd(val){
    this.props.addComments(val)
  }
  handledecd(val){
    this.props.decComments(val)
  }
  render() {
    return (
      <div>
       <button onClick={this.handledecd.bind(this,2)}>bt-</button>
       <button onClick={this.handleadd.bind(this,2)}>bt+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // comment: state.comment
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addComments: (comment) => {
        dispatch(addComments(comment))
      },
      decComments: (comment) => {
        dispatch(decComments(comment))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CommentBts)
