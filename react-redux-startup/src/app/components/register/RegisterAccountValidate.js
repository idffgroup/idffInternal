export const validate = values => {
  const errors = {}
  let email = values['email'];
  email = email ? email.trim() : email;
  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  } else {
    localStorage.setItem('invoiceEmail', email);
  }

  let password = values['password'];
  if (!password) {
    errors.password = 'Required';
  }

  // let firstName = values['firstName'];
  // if (!firstName) {
  //   errors.firstName = 'Required';
  // }
  // let lastName = values['lastName'];
  // if (!lastName) {
  //   errors.lastName = 'Required';
  // }

  // let pan = values['pan'];
  // if (!pan) {
  //   errors.pan = 'Required';
  // }

  let mobile = values['mobile'];
  if (!mobile) {
    errors.mobile = 'Required';
  }
  else {
    localStorage.setItem('invoiceMobile', mobile);
  }

  let confirmpassword = values['confirmpassword'];
  if (!confirmpassword) {
    errors.confirmpassword = 'Required';
  } else if (confirmpassword != password) {
    errors.confirmpassword = 'password is not same as confirmpassword';
  }

  let onetimeOTP = values['onetimeOTP'];
  if (!onetimeOTP) {
    errors.onetimeOTP = 'Required';
  }

  return errors
}


export const contactDetailsValidate = values => {
  const errors = {}

  let businessname = values['businessname'];
  if (!businessname) {
    errors.businessname = 'Required';
  }

  let firstname = values['firstname'];
  if (!firstname) {
    errors.firstname = 'Required';
  }
  let lastname = values['lastname'];
  if (!lastname) {
    errors.lastname = 'Required';
  }

  let lastName = values['lastName'];
  if (!lastName) {
    errors.lastName = 'Required';
  }

  return errors
}



export const addressDetailsValidate = values => {
  const errors = {}

  /*let addressline = values['addressline'];
  if (!addressline) {
    errors.addressline = 'Required';
  }*/

  /*  let street = values['street'];
    if (!street) {
      errors.street = 'Required';
    }*/
  /*  let area = values['area'];
    if (!area) {
      errors.area = 'Required';
    }*/

  let city = values['city'];
  if (!city) {
    errors.city = 'Required';
  }

  let postalcode = values['postalcode'];
  if (!postalcode) {
    errors.postalcode = 'Required';
  }

  let postalCode = values['postalCode'];
  if (!postalCode) {
    errors.postalCode = 'Required';
  }

  return errors
}

export const businessDetailsValidate = values => {
  const errors = {}

  let currency = values['currency'];
  if (!currency) {
    errors.currency = 'Required';
  }

  let Currency = values['Currency'];
  if (!Currency) {
    errors.Currency = 'Required';
  }

  return errors
}
