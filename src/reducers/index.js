import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import filterReducer from './filterReducer'
import sorterReducer, { getSort, getReverse } from './sorterReducer'
import { 
  getFilteredCountersByMin,
  getFilteredCountersByMax,
  getFilteredCountersBySearch
} from './filterReducer'

const reducers = combineReducers({
  counterReducer,
  filterReducer,
  sorterReducer
})

export default reducers

export const getTotal = ({ counterReducer: { counters } }) => 
  counters.reduce((acc, counter) => acc + counter.count , 0)

export const getVisibleCounters = ({ counterReducer, filterReducer, sorterReducer}) => {
  let visibleCounters = [ ...counterReducer.counters ]

  if (filterReducer.min !== '') {
    visibleCounters = getFilteredCountersByMin(visibleCounters, filterReducer.min)
  } 
  if (filterReducer.max !== '') {
    visibleCounters = getFilteredCountersByMax(visibleCounters, filterReducer.max)
  }
  if (filterReducer.searchValue !== '') {
    visibleCounters = getFilteredCountersBySearch(visibleCounters, filterReducer.searchValue)
  }
  if (sorterReducer.sortBy !== '') {
    visibleCounters = getSort(sorterReducer.sortBy, visibleCounters)
  }
  if (sorterReducer.isReversed) {
    visibleCounters = getReverse(visibleCounters)
  }
  
  return visibleCounters
}