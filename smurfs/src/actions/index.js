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
export const DELETE = "DELETE";
export const DELETING = "DELETING";

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

const endpoint = "http://localhost:3333";