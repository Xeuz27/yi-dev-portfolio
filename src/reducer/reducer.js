export const initialState = {
  language: 'spanish',
  page: 'home',
    color: 'blue'
};
export const Reducer = (previousState, action) => {
  switch (action.type) {
    case 'language':
      return {
        ...previousState,
        language: action.language
      };
    case 'color':
      return {
        ...previousState,
        color: action.color
      };
    
    default:
      return { };
  }
};
