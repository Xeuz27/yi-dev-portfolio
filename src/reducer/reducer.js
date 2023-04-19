export const initialState = {
  language: 'english',
  page: 'Home',
    color: 'violet'
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
    case 'page':
      return {
        ...previousState,
        page: action.page
      };
    
    default:
      return { };
  }
};
