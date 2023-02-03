import { useState, useEffect, useRef } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);

  const useToken = () => {
    const URL = '/api/verify-user-auth';

    const isFlag = useRef(false);
    useEffect(() => {
      fetch(URL, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      }).then((res) => res.json())
        .then((resp) => {
          isFlag.current = resp.auth;
          setLoading(false);
        });
    }, [URL]);
    // eslint-disable-next-line no-nested-ternary
    return loading ? 'Loading...' : isFlag.current ? <Outlet /> : '';
  };

  return (
    useToken() === '' ? <Navigate to="/" /> : <Outlet />
  );
};

export default ProtectedRoute;
