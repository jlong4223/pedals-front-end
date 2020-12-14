import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../services/userService'
import './SignupForm.css'

function SignupForm (props) {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  });

  function handleChange(e) {
    props.updateMessage('');
    setFormState(prevState => ({
        ...prevState,
        // Using Computed Property Names
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      await signup(formState);
      props.handleSignupOrLogin()
      // Successfully signed up -sends to another page
      props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  function isFormInvalid() {
    return !(formState.name && formState.email && formState.password === formState.passwordConf);
  }
    return (
      <div className="page signuppage">
        <div className="container">
        <form className="form-horizontal" onSubmit={handleSubmit} >
          <fieldset className='signupfield'>
            <legend>Sign Up</legend>
          <div className="form-group">
            <div className="col-sm-12">
              <div className="namebox">
                <h3 className='icons'><i className="fas fa-user"></i></h3>
                <input type="text" className="form-control" placeholder="Name" value={formState.name} name="name" onChange={handleChange} />
                </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <div className='emailbox'>
                <h3 className='icons'><i className="fas fa-envelope-square"></i></h3>
              <input type="email" className="form-control" placeholder="Email" value={formState.email} name="email" onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <div className='keybox'>
              <h3 className='icons'><i className="fas fa-key"></i></h3>
              <input type="password" className="form-control" placeholder="Password" value={formState.password} name="password" onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
            <div className='keybox'>
              <h3 className='icons'><i className="fas fa-check"></i></h3>
              <input type="password" className="form-control" placeholder="Confirm Password" value={formState.passwordConf} name="passwordConf" onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
            <h6>Have an account? <Link to='/login'>Login</Link></h6>
          </div>
          </fieldset>
        </form>
        </div>
      </div>
    );
}

export default SignupForm;