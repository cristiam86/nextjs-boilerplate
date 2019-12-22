import React from 'react';
import useForm from '@bit/iamtechnologies.iamtech-js.use-form';

const ERRORS_TEXT = {
  isRequired: 'Campo obligatorio',
  isEmail: 'Formato de email inválido'
}

const Index = () => {
  const defaultValues = {
    name: '',
    email: ''
  };

  const { values, useInput, isValid, errors, showErrors } = useForm(defaultValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("FORM VALUES: ", values);
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" {...useInput('name', 'isRequired')}/>
            <div className="form-errors">
              {showErrors.name && errors.name && errors.name.map(err => <div key={err} className="form-errors-item">{ERRORS_TEXT[err]}</div>)}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="text" {...useInput('email', 'isEmail,isRequired')}/>
            <div className="form-errors">
              {showErrors.email && errors.email && errors.email.map(err => <div key={err} className="form-errors-item">{ERRORS_TEXT[err]}</div>)}
            </div>
          </div>
          {isValid && <button type="submit">Enviar</button>}
        </form>
      </div>
    </div>
  );
}
 
export default Index;