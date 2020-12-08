import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './LoginPage.css';

function LoginPage(props) {
  const [formState, setFormState] = useState({
    email: "",
    pw: ""
  });

  function handleChange(e) {
    // TODO: write the handleChange logic
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // TODO: write handleSubmit logic

    } catch (err) {
      // Use a modal or toast in your apps instead of alert
	    alert('Invalid Credentials!');
    }
  }

  return (
    <div className="LoginPage">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={formState.email}
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={formState.pw}
              name="pw"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Log In</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;