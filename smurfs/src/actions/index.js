/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const GET = "GET";
export const GETTING = "GETTING";
export const CREATE = "CREATE";
export const CREATING = "CREATING";
export const UPDATE = "UPDATE";
export const UPDATING = "UPDATING";
export const DELETE = "DELETE";
export const DELETING = "DELETING";
export const ERROR = "ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const endpoint = "http://localhost:3333/smurfs";

export const getRequest = () => {
  const smurfs = axios.get(`${endpoint}`);
  return dispatch => {
    dispatch({ type: GETTING });
    smurfs
      .then(response => {
        dispatch({ type: GET, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const postRequest = smurf => {
  const newSmurf = axios.post(`${endpoint}`, smurf);
  return dispatch => {
    dispatch({ type: CREATING});
    newSmurf
      .then(({ data }) => {
        dispatch({ type: CREATE, payload: data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};