export const SORT = 'SORT'
export const SORT_BY_TITLE = 'SORT_BY_TITLE'
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT'
export const REVERSE_ORDER = 'REVERSE_ORDER'


export const sortAction = (sorter) => ({
  type: SORT,
  payload: sorter
})

export const reverseAction = () => ({
  type: REVERSE_ORDER
})
