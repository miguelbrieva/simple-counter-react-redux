import { 
  GET_COUNTERS,
  DELETE_COUNTER,
  ADD_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FETCHING,
  ERROR,
} from '../actions/counterActions'

const INITIAL_STATE = {
  counters: [],
  isFetching: false,
  error: ''
}

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COUNTERS:
      return {
        ...state,
        counters: action.payload,
        isFetching: false,
        error: ''
      }

    case ADD_COUNTER:
      return {
        ...state,
        counters: [
          ...state.counters,
          action.payload
        ],
        isFetching: false,
        error: ''
      }

    case DELETE_COUNTER:
      return {
        ...state,
        counters:[ ...state.counters.filter(counter => counter.id !== action.payload)]
      }

    case INCREMENT_COUNTER:
      return {
        ...state,
        counters: [...state.counters.map(counter =>
          counter.id === action.payload.id ?
            action.payload :
            counter
        )],
        isFetching: false,
        error: ''
      }

    case DECREMENT_COUNTER:
      return {
        ...state,
        counters: [...state.counters.map(counter =>
          counter.id === action.payload.id ?
            action.payload :
            counter
        )],
        isFetching: false,
        error: ''
      }

    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      }

    case ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
      
    default:
      return state
  }
}

export default counterReducer

