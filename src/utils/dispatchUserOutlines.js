import React from 'react'
import fetchUserOutlines from "../utils/fetchUserOutlines";
import { clearOutlines, addUserOutline } from '../redux/actions';

let dispatchUserOutlines = props => {
  props.dispatch(clearOutlines());
  return fetchUserOutlines(props.user).then(response => {
    response.map(outline => {
      props.dispatch(addUserOutline(outline));
      return outline;
    });
  });
};

export default dispatchUserOutlines
