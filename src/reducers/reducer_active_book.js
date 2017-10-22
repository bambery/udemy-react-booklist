 // state argument is not app state, only the state this reducer is responsible for - ie its own state. This state is the state of activeBook. Initially, unless set with a default, it should be empty 
export default function(state = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  default: 
    return state;
  }
}
