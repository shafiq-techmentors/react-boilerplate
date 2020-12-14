import { userService } from 'services';
import { getDispatch } from '../store';
import ACTION_TYPES from '../action-types';

export default {
  create: async () => {

  },

  list: async () => {
    const dispatch = getDispatch();
    const users = await userService.getAll();

    return dispatch({
      type: ACTION_TYPES.USER.GET_ALL,
      payload: { users }
    });
  },

  update: async () => {

  },

  delete: async () => {

  }
};