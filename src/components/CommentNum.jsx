import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initComments } from '../reducers/index'
export class CommentNum extends Component {
  static propTypes = {
    comments: PropTypes.number,
    initComments: PropTypes.func,
  }
  componentDidMount(){
    this.props.initComments(10)
  }
  render() {
    return (
      <div>
        <h1>
          {
            this.props.comment
          }
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comment: state.comment
  }
}

const mapDispatchToProps  = (dispatch) => {
  return {
    initComments: (comment) => {
      dispatch(initComments(comment))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentNum)
