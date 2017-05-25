const validate = values => {
  const errors = {}  
  let email = values['email'];

  if (!email) {
    errors.email = 'Required'
  } else {
    email = email.trim();
  }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //   errors.email = 'Invalid email address'
  // }

  let password = values['password'];
  if (!password) {
    errors.password = 'Required';
  }  
  return errors
}

export default validate;