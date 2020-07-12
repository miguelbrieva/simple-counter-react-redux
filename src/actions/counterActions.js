export const LIST_COUNTERS = "LIST_COUNTERS";
export const GET_COUNTERS = "GET_COUNTERS";
export const ADD_COUNTER = "ADD_COUNTER";
export const FETCHING = "FETCHING";
export const ERROR = "ERROR";
export const DELETE_COUNTER = "DELETE_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const apiWrapper = (url, type, data) => {
  return fetch(url, {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const getCounters = () => (dispatch) => {
  dispatch({
    type: FETCHING,
    isFetching: true,
  });

  apiWrapper("/api/v1/counters")
    .then((counters) => {
      console.log("counters: ", counters);
      dispatch({
        type: GET_COUNTERS,
        payload: counters,
      });
    })
    .catch((error) => {
      console.error(error.message);
      dispatch({
        type: ERROR,
        payload: "ERROR => Problem fetching counters",
      });
    });
};

export const addCounter = (title) => (dispatch) => {
  dispatch({
    type: FETCHING,
    isFetching: true,
  });
  apiWrapper("/api/v1/counter", "POST", { title })
    .then((newCounter) => {
      console.log("newCounter: ", newCounter);
      dispatch({
        type: ADD_COUNTER,
        payload: newCounter,
      });
    })
    .catch((error) => {
      console.error(error.message);
      dispatch({
        type: ERROR,
        payload: "ERROR => Problem adding Counter",
      });
    });
};

export const deleteCounter = (id) => (dispatch) => {
  dispatch({
    type: FETCHING,
    isFetching: true,
  });
  apiWrapper("/api/v1/counter", "DELETE", { id })
    .then((id) => {
      console.log("delete", id);
      dispatch({
        type: DELETE_COUNTER,
        payload: id,
      });
    })
    .catch((error) => {
      console.error(error.message);
      dispatch({
        type: ERROR,
        payload: "ERROR => Problem deleting Counter",
      });
    });
};

export const incrementCounter = (id) => (dispatch) => {
  dispatch({
    type: FETCHING,
    isFetching: true,
  });
  apiWrapper("/api/v1/counter/inc", "POST", { id })
    .then((counter) => {
      console.log("increment:", counter);
      dispatch({
        type: INCREMENT_COUNTER,
        payload: counter,
      });
    })
    .catch((error) => {
      console.error(error.message);
      dispatch({
        type: ERROR,
        payload: "ERROR => Problem increasing Counter",
      });
    });
};

export const decrementCounter = (id) => (dispatch) => {
  dispatch({
    type: FETCHING,
    isFetching: true,
  });
  apiWrapper("/api/v1/counter/dec", "POST", { id })
    .then((counter) => {
      console.log("decrement", counter);
      dispatch({
        type: DECREMENT_COUNTER,
        payload: counter,
      });
    })
    .catch((error) => {
      console.error(error.message);
      dispatch({
        type: ERROR,
        payload: "ERROR => Problem decreasing Counter",
      });
    });
};
