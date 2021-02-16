import {addNote, ADD_NOTE, DELETE_NOTE} from '../actions/todo';

const initialState = {
  noteArray: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      if (action.noteText) {
        let d = new Date();
        state.noteArray.push({
          date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
          note: action.noteText,
        });
        return {noteArray: state.noteArray};
      }
      break;
    case DELETE_NOTE:
      state.noteArray.splice(action.keyNote, 1);
      return {noteArray: state.noteArray};
    default:
      return state;
  }
};

export default todoReducer;
