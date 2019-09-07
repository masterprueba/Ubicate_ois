export const loginAction = ({ textEmail }) => {  
  console.log("loginAction::textEmail",textEmail) ;
  dispatch({
        type: 'LOGIN_USER',
        payload: textEmail,
  });
  // return {
  //   type: 'LOGIN_USER',
  //   payload: dataUser,
  // };
};