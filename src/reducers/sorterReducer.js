import { 
  SORT,
  SORT_BY_TITLE,
  SORT_BY_AMOUNT,
  REVERSE_ORDER,
} from '../actions/sortActions'

const INITIAL_STATE = {
  sortBy: '',
  isReversed: false,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SORT:
      if(state.sortBy === action.payload) {
        return {
          ...state,
          sortBy: null
        }
      } 
      return {
        ...state,
        sortBy: action.payload
      }
    case REVERSE_ORDER:
      return {
        ...state,
        isReversed: !state.isReversed
      }
    default:
      return state
  }
}

const sortByTitle = (counters) => {
  return counters.sort((titleA, titleB) => {
    let a = titleA.title.toLowerCase()
    let b = titleB.title.toLowerCase()
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })
}

const sortByAmount = (counters) =>
  counters.sort((a,b) => a.count - b.count)

export const getSort = (sorter, counters) => {
  switch (sorter) {
    case SORT_BY_TITLE:
      return sortByTitle(counters)
    case SORT_BY_AMOUNT:
      return sortByAmount(counters)
    default:
      return counters
  }
}

export const getReverse = (counters) => counters.reverse()