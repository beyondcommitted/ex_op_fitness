const oktaAuthConfig = {
  // Note: If your app is configured to use the Implicit flow
  // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
  // you will need to add `pkce: false`
  issuer: process.env.REACT_APP_OKTA_BASE_URL + "/oauth2/default",
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: process.env.REACT_APP_OKTA_BASE_URL,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,

  redirectUri: window.location.origin + "/login/callback",

  // Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
  features: {
    // Used to enable registration feature on the widget.
    // https://github.com/okta/okta-signin-widget#feature-flags
    registration: true, // REQUIRED
  },
};

export { oktaAuthConfig, oktaSignInConfig };
