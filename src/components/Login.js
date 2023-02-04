import React, { useState } from 'react';
import '../assets/styles/login.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const navigate = useNavigate();

  const usernameNotify = () => toast.error('Username polje ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const usernameLengthNotify = () => toast.error('Username mora imati minimalno 8 karaktera.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const passwordNotify = () => toast.error('Password polje ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const passwordLengthNotify = () => toast.error('Password mora imati minimalno 8 karaktera.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const URL = 'https://advokat-rasinlic.com/api/login';

    if (usernameLogin.length === 0) {
      usernameNotify();
      return;
    }

    if (usernameLogin.length < 8) {
      usernameLengthNotify();
      return;
    }

    if (passwordLogin.length === 0) {
      passwordNotify();
      return;
    }

    if (passwordLogin.length < 8) {
      passwordLengthNotify();
      return;
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        username: usernameLogin,
        password: passwordLogin,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.auth) {
          localStorage.setItem('token', res.token);
          setUsernameLogin('');
          setPasswordLogin('');
          toast.success('Uspješno ste se ulogovali.', {
            position: toast.POSITION.TOP_CENTER,
          });
          setTimeout(() => {
            navigate('/advokatr-admin-blogs');
          }, 3000);
        } else {
          toast.error('Vaš račun ne postoji ili ste pogrešno unijeli podatke.', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((err) => err);
  };

  return (
    <>
      <div className="login-form">
        <div className="login-inner-wrapper">
          <form method="POST">
            <h2 className="login-h2">Login</h2>
            <input
              className="login-input"
              type="text"
              name="uname"
              placeholder="Username"
              value={usernameLogin}
              onChange={(e) => setUsernameLogin(e.target.value)}
              required
            />
            <input
              className="login-input"
              type="password"
              name="upass"
              placeholder="Password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
            <div className="button-container">
              <input type="submit" className="login-btn-sbmt" onClick={handleSubmitLogin} />
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
