export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (text) => {
  return {type: ADD_NOTE, noteText: text};
};

export const deleteNote = (key) => {
  return {type: DELETE_NOTE, keyNote: key};
};
