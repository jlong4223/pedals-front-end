import { useState } from 'react';
import { Link } from 'react-router-dom';
import {login} from '../../services/userService'

function LoginPage(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormState(prevState => ({
        ...prevState,
        // Using Computed Property Names
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e) {
      e.preventDefault();
      if(!formValid()) return
    try {
        await login(formState)
        props.handleSignupOrLogin()
        // props.history.push('/dashboard')
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
	    alert('Invalid Credentials!');
    }
  }

  function formValid(){
    return!!(formState.email && formState.password)
}

  return (
    <div className="page">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button disabled={!formValid()}className="btn btn-default">Log In</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;