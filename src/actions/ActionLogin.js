export const loginAction = ({ textEmail }) => {  
  
  dispatch({
        type: 'LOGIN_USER',
        payload: textEmail,
  });
  // return {
  //   type: 'LOGIN_USER',
  //   payload: dataUser,
  // };
};