import { ENV } from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;

};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'paXreDxhgiyxjSlmxXU5LMiRuW4npYww',
  CLIENT_DOMAIN: 'dev-9wfy7c0y.auth0.com', // e.g., kmaida.auth0.com
  AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile email',
  NAMESPACE: 'http://localhost:8083/roles',
  
};
