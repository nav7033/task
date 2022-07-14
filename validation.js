export function validateEmail(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    return errors;
  };

  export function validateName(values) {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = 'firstName is required';
    }
    if (!values.lastName) {
        errors.lastName = 'LastName is required';
      }
    else if(!(values.firstName.length>3 && values.firstName.length<=15 || values.lastName.length>3 && values.lastName.length<=15)){
        errors.firstName = "length should be 3 to 15"
        errors.lastName ="length should be 3 to 15"

    }  
    return errors;
  };

  export function validateQuest(value){
    let error = {}
    if(!value.question){
        error.question = 'question is required';
    }
    return error
  }

