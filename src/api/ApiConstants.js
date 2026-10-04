/**
 * Backend routes (NestJS todo API).
 * Identity comes from the JWT — no :userId in URLs anymore.
 */
export const ApiConstants = {
  TODO: {
    ADD: '/todo/create',
    FIND_ALL: '/todo',
    FIND_NOT_COMPLETED: '/todo/not-completed',
    FIND_COMPLETED: '/todo/completed',
    MARK_COMPLETE: (todoId) => {
      return '/todo/update/' + todoId;
    },
    DELETE: (todoId) => {
      return '/todo/delete/' + todoId;
    },
  },
  USER: {
    SIGN_UP: '/user/create',
    FIND_ALL: '/user',
    FIND_ONE: (userId) => {
      return '/user/' + userId;
    },
    DELETE: (userId) => {
      return '/user/delete/' + userId;
    },
  },
  LOGIN: '/auth/login',
};
