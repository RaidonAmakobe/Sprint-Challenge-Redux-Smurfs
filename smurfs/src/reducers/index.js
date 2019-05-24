import * as actionTypes from "../actions";
/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs:[],
  gettingSmurfs: false,
  creatingSmurfs: false,
  updatingSmurfs: false,
  deletingSmurfs: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING:
      return {...state, gettingSmurfs: true};
    
    case actionTypes.GET:
      return {...state, smurfs: action.payload, gettingSmurfs: false};

    case actionTypes.UPDATING:
      return {...state, updatingSmurfs: true};

    case actionTypes.UPDATE:
      return {...state, smurfs: action.payload, updatingSmurfs: false};

    case actionTypes.DELETING:
      return {...state, deletingSmurf: true};
    
    case actionTypes.DELETE:
      return {...state, smurfs: action.payload, deletingSmurfs: false};
    
    case actionTypes.CREATING:
      return {...state, creatingSmurfs: true};

    case actionTypes.CREATE:
      return {...state, smurfs: action.payload, creatingSmurfs: false};
    
    case actionTypes.ERROR:
      return {...state, gettingSmurfs: false, creatingSmurfs: false, updatingSmurfs: false, deletingSmurfs: false, error: action.payload};
    
    default:
      return state;
  }
};

export default rootReducer;