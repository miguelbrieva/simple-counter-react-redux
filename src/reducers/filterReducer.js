import { 
  FILTER_BY_SEARCH,
  FILTER_BY_MIN,
  FILTER_BY_MAX,
  CLEAR_SEARCH,
  CLEAR_MINMAX,
} from '../actions/filterActions'

const INITIAL_STATE = {
  searchValue: '',
  min: '',
  max: '',
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FILTER_BY_SEARCH:
      return {
        ...state,
        searchValue: action.value,
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        searchValue: ''
      }
    case FILTER_BY_MIN:
      return {
        ...state,
        min: action.min
      }
    case FILTER_BY_MAX:
      return {
        ...state,
        max: action.max
      }
    case CLEAR_MINMAX:
      return {
        ...state,
        min: '',
        max: ''
      }
    default:
      return state
  }
}

export const getFilteredCountersBySearch = (counters, searchValue) => 
  counters.filter(counter => counter.title.toLowerCase().includes(searchValue.toLowerCase()))


export const getFilteredCountersByMin = (counters, minVal) =>
  counters.filter(counter => parseInt(counter.count) >= parseInt(minVal))


export const getFilteredCountersByMax = (counters, maxVal) =>
  counters.filter(counter => parseInt(counter.count) <= parseInt(maxVal))

export const getIsFiltering = ({searchValue, min, max}) => {
  if (searchValue === '' && min === '' && max === '') {
    return false
  } else {
    return true
  }
}