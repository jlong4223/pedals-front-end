import { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
// import './SignupPage.css';

function SignupPage(props){

  const [messageState, setMessageState] = useState({
    msg: ''
  });

  function updateMessage(msg) {
    setMessageState({message: msg});
  }

    return (
      <div className='page'>
        <SignupForm {...props} handleSignupOrLogin={props.handleSignupOrLogin} updateMessage={updateMessage} />
        <p>{messageState.msg}</p>
      </div>
    );
}

export default SignupPage;