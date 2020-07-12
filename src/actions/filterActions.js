export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH'
export const FILTER_BY_MIN = 'FILTER_BY_MIN'
export const FILTER_BY_MAX = 'FILTER_BY_MAX'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const CLEAR_MINMAX = 'CLEAR_MINMAX'

export const filterBySearch = (value) => {
  return {
    type: FILTER_BY_SEARCH,
    value
  } 
}

export const filterByMin = (min) => {
  return {
    type: FILTER_BY_MIN,
    min
  }
}

export const filterByMax = (max) => {
  return {
    type: FILTER_BY_MAX,
    max
  }
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}

export const clearMinmax = () => {
  return {
    type: CLEAR_MINMAX
  }
}