import {SET_ALL_TASKS, SET_TASK, TOGGLE_ACTIVE} from './actions';

const initialState = {
  tasks: [],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return {...state, tasks: [...state.tasks, action.payload]};
    case SET_ALL_TASKS:
      return {...state, tasks: action.payload};
    case TOGGLE_ACTIVE: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload.ID) {
            return task;
          }
          return {
            ...task,
            isActive: action.payload.isActive,
          };
        }),
      };
    }
    default:
      return state;
  }
}

export default taskReducer;
