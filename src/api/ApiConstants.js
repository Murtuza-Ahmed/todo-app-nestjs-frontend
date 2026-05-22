export const ApiConstants = {
  TODO: {
    ADD: (userId) => {
      return "/todo/create/" + userId;
    },
    FIND_NOT_COMPLETED: (userId) => {
      return "/todo/not-completed/" + userId;
    },
    FIND_COMPLETED: (userId) => {
      return "/todo/completed/" + userId;
    },
    MARK_COMPLETE: (todoId) => {
      return "/todo/update/" + todoId;
    },
    DELETE: (todoId) => {
      return "/todo/delete/" + todoId;
    },
  },
  USER: {
    SIGN_UP: "/user/create",
    FIND_ALL: "/user",
    DELETE: (userId) => {
      return "/user/delete/" + userId;
    },
  },
  LOGIN: "/auth/login",
};