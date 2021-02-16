export const LOGIN = 'LOGIN';

export const login = (emailUser, passwordUser) => {
  return {type: LOGIN, email: emailUser, password: passwordUser};
};
