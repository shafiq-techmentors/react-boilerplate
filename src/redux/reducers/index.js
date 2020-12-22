import ACTION_TYPES from "../action-types";
import initialState from "../initial-state";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.USER.CREATE:
      return {
        ...state,
        users: [...state.users, { ...payload }],
      };

    case ACTION_TYPES.USER.GET_ALL:
      return {
        ...state,
        users: [],
        ...payload,
      };

    case ACTION_TYPES.USER.GET:
      return {
        ...state,
        user: {},
        ...payload,
      };

    case ACTION_TYPES.USER.DELETE:
      return {
        ...state,
      };

    case ACTION_TYPES.USER.UPDATE:
      return {
        ...state,
      };

    default: {
      return state;
    }
  }
};
