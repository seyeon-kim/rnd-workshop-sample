import types from './types';

export const newNote = note => {
  return {type: types.NEW_NOTE, note: note};
};
