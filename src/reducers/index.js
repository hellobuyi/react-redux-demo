// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const DEC_COMMENTS = 'DEC_COMMENTS'
const ADD_COMMENTS = 'ADD_COMMENTS'

// reducer
export default function (state, action) {
  if (!state) {
    state = { comment: 0 }
  }
  console.log(action)
  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return { comment: action.comments }
    case  DEC_COMMENTS:
      // 减
      return { comment: state.comment-action.comments }
    case ADD_COMMENTS:
      // 加
      return { comment: state.comment+action.comments }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const decComments = (comments) => {
  return { type: DEC_COMMENTS, comments }
}

export const addComments = (comments) => {
  return { type: ADD_COMMENTS, comments }
}

