export const SET_TASK = 'SET_TASK';
export const SET_ALL_TASKS = 'SET_ALL_TASKS';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const EDIT_TASK = 'EDIT_TASK';

export const setNewTask = task => dispatch => {
  dispatch({
    type: SET_TASK,
    payload: task,
  });
};

export const setAllTasks = taskArr => dispatch => {
  dispatch({
    type: SET_ALL_TASKS,
    payload: taskArr,
  });
};

export const toggleActive = task => dispatch => {
  dispatch({
    type: TOGGLE_ACTIVE,
    payload: task,
  });
};

export const editTask = task => dispatch => {
  dispatch({
    type: EDIT_TASK,
    payload: task,
  });
};
