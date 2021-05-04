import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

// Basic component with logout button
const Logout = () => { 
  const { oktaAuth } = useOktaAuth();

  const logout = async () => {
    // Will redirect to Okta to end the session then redirect back to the configured `postLogoutRedirectUri`
    oktaAuth.tokenManager.clear();
  };

  return (
    <button onClick={logout}>Logout</button>
  );
};

export default Logout;